import { useState } from 'react';
import { Container, Fields, FormBox, InputLabel, NameCon, SmallText, SubmitButton } from '../components/RegisterComponents';
import { FormContainer, Section } from '../components/RegisterComponents';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as yup from 'yup';
import { useFormik } from 'formik';
import '../Styles/styles.css';
import React from 'react';

export default function Register() {
    const [error, setError] = useState('');
    const basicSchema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Confirm password is required')
    })

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: basicSchema,
        onSubmit: async (values) => {
            try {
                const {data} = await axios.post('/register', values);
                if(data.error){
                    toast.error(data.error);
                    setError(data.error);
                } else {
                    toast.success('Account created successfully!')
                    navigate('/restaurants')
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    })


    const navigate = useNavigate();


return (
    <>
    <Helmet>
        <title>pickleBOT | Sign Up</title>
        <link rel="icon" type="image/png" href="./images/pickleball.png"/>
      </Helmet>
        <Section>
            <Container>
                <FormContainer>
                    <h1>Create an account</h1>
                    <FormBox onSubmit={handleSubmit}>
                        <NameCon>
                            <InputLabel>First Name</InputLabel>
                            <InputLabel>Last Name</InputLabel>

                            <Fields autoComplete="off" className={errors.firstName && touched.email? "input-error" : ""} id="firstName" type="text" placeholder='Enter name...' value={values.firstName} onChange={handleChange}/>
                            
                            <Fields autoComplete="off" className={errors.lastName && touched.email ? "input-error" : ""} id="lastName" type="text" placeholder='Enter name...' value={values.lastName} onChange={handleChange}/>
                        </NameCon>

                        
                        <InputLabel>Email</InputLabel>
                        <Fields autoComplete="off" className={(errors.email && touched.email) || error ? "input-error" : ""} id="email" type="text" placeholder='Enter email...' value={values.email} onChange={handleChange}/>
                        {errors.email && touched.email && <p className="error_2">{errors.email}</p>}

                        <InputLabel>Password</InputLabel>
                        <Fields autoComplete="off" className={errors.password && touched.email? "input-error" : ""} id="password" type="password" placeholder='Enter password...' value={values.password} onChange={handleChange}/>
                        {errors.password && touched.email && <p className="error_2">{errors.password}</p>}
                        <InputLabel>Confirm password</InputLabel>
                        <Fields autoComplete="off" className={errors.confirmPassword && touched.email ? "input-error" : ""} id="confirmPassword" type="password" placeholder='Confirm password...' value={values.confirmPassword} onChange={handleChange}/>
                        {errors.confirmPassword && touched.email && <p className="error_2">{errors.confirmPassword}</p>}
                        <SubmitButton type='submit'><span>Sign Up</span></SubmitButton>
                    </FormBox>
                </FormContainer>
                
            </Container>
            <SmallText>Already have an account? <a href="/login">Sign in here</a></SmallText>

        </Section>
    </>
)
}
