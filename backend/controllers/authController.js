const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();


// Register endpoint
const registerUser = async(req, res) => {
    try{
        const { firstName, lastName, email, password } = req.body;
        // Check if name was entered
        if(!firstName || !lastName){
            return res.json({
                error: 'Name is required'
            })
        };
        // Check if password is good
        if(!password || password.length < 7){
            return res.json({
                error: 'Password should be at least 7 characters long'
            })
        };

        // Check if email is unique
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error: 'An account with this email already exists'
            })
        }

        const hashedPassword = await hashPassword(password)
        // Create user in database
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: 'USER',
            stripeSessionID: '',
        })

        return res.json(user)
    }
    catch(error){
        console.log(error);
        return res.json({
            error: 'An error occurred during registration'
        });
    }
}

// Login endpoint
const loginUser = async(req, res) => {
    try
    {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'Incorrect email or password'
            })
        }
        
        // check if passwords match
        const match = await comparePassword(password, user.password)
        if (match) {
            const token = jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: '6h' });
            res.setHeader('Authorization', `Bearer ${token}`);
            // 28800000 = 8 hours
            //res.cookie('jwt', token, { httpOnly: true, maxAge: 28800000, secure: true, sameSite: 'none', Partitioned: true });
            res.json({ user, token });
        }

        if (!match) {
            return res.json({
                error: 'Incorrect email or password'
            });
        }

    } catch (error) {
        return res.status(401).json(error);
    }
}

const authenticateToken = async(req, res, next)=>{
    try {
        const token = req.headers['authorization']?.split(" ")[1];
        // const token = authHeader && authHeader.split(' ')[1]

        //const token = req.cookies.jwt;

        if(token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.sendStatus(403);
            req.user = user;
            next();
            
        });

    } catch (error) {
        return res.json({status: false, message: "Invalid token"})
    }
}


const verifyUser = async(req, res) => {
    try {
        const user = req.user;
        return res.json(user);
    } catch (error) {
        return res.json({error: 'An error occurred while verifying the user'})
    }
}

const logoutUser = async(req, res) => {
    try {
        await localStorage.removeItem('jwt');
        return res.json({message: 'Logged out successfully'})
    } catch (error) {
        return res.json({error: 'An error occurred while logging out'})
    }
}

module.exports = {
    registerUser,
    loginUser,
    authenticateToken,
    verifyUser,
    logoutUser
}