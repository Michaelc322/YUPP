const bcryptjs = require('bcryptjs');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcryptjs.genSalt(12, (err, salt) => {
            if(err){
                reject(err)
            }

            bcryptjs.hash(password, salt, (err, hash) => {
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}


const comparePassword = (password, hashed) => {
    return bcryptjs.compare(password, hashed)
}


module.exports = {
    hashPassword,
    comparePassword
}