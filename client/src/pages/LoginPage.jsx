import { useState } from 'react';
import { Container, Fields, FormBox, FormContainer, InputLabel, Section, SmallLink, SmallText, SubmitButton } from '../Components/LogInComponents';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '../context/AuthProvider';
import '../Styles/styles.css';



export default function LogIn() { 
    axios.defaults.withCredentials = true;
    const { setUserInfo } = useAuth();
    const basicSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().required('Required')
    })

    const [error, setError] = useState('');


    const navigate = useNavigate();
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: basicSchema,
        onSubmit: async (values) => {
            try {
                const {data} = await axios.post('/login', values);
                setUserInfo(data.user);
                if(data.error){
                    toast.error(data.error);
                    setError(data.error);
                } else {
                    localStorage.setItem('token', data.token);
                    toast.success('Logged in successfully!')
                    navigate('/restaurants')
                    //login();
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    })


  return (
    <>
      <Helmet>
        <title>pickleBOT | Log In</title>
        <link rel="icon" type="image/png" href="./images/pickleball.png"/>
      </Helmet>
    <Section>
        <Container>
            <FormContainer>
                <h1>Log In</h1>
                {error && <p className="loginError">{error}</p>}
                <FormBox onSubmit={handleSubmit}>
                    <InputLabel>Email</InputLabel>
                    <Fields autoComplete="off" className={errors.email && touched.email ? "input-error" : ""} id="email" type="text" placeholder='Enter email...' value={values.email} onChange={handleChange}/>
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <InputLabel>Password</InputLabel>
                    <Fields autoComplete="off" className={errors.password && touched.email? "input-error" : ""} id="password" type="password" placeholder='Enter password...' value={values.password} onChange={handleChange}/>
                    {errors.password && touched.email && <p className="error">{errors.password}</p>}

                    <SmallLink href="/forgot-password">Forgot password?</SmallLink>
                    <SubmitButton type='submit'><span>Log In</span></SubmitButton>

                </FormBox>
            </FormContainer>
        </Container>
        <SmallText>Don't have an account? <a href="register">Create new account</a></SmallText>
    </Section>
    </>
  )
}