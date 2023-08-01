import React, { useState } from 'react'
import './adminLogin.scss'
import { VisibilityOutlined } from '@mui/icons-material'
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function AdminLogin() {
  const [credentials,setCredentials] = useState({});
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: credentials,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const admin = {email:"xyz@gmail.com",password:"xyz123"}
  const handleClick = (e)=>{
    e.preventDefault()
    console.log(credentials)
    if(credentials.email === admin.email && credentials.password === admin.password){
      localStorage.setItem('adminToken',JSON.stringify(credentials));
      window.location.reload(1);
    }
    else{
      alert("Invalid Credentials")
      window.location.reload(1);
    }
  }

  const handleShowPassword = ()=>{
    const password = document.getElementById('password');
    (password.type === 'password')?password.type = 'text':password.type = 'password'
    
  }
  return (
    <div className='login-container'>
        <div className="login-image">
            <div className="login-image1">
                <img src="assets/images/image 97.png" alt="" />
            </div>
            <div className="login-image1">
            <img src="assets/images/image 96.png" alt="" />
            </div>
        </div>
        <div className="login-form-container">
            <div className="login-form">
            <div className="login-form-logo">
            <img src="assets/images/chatbot.png" alt="chatbot" />
            <p>Chatbot<br/>Management System</p>
            </div>
            <div className="login-form-heading">
              <h2>Super Admin Login</h2>
            </div>
            <div className="login-form-inputs">
              <form onSubmit={handleClick}> 
                <div className='form-div'>
                <label htmlFor="email">Enter Email address</label>
                {/* <input type="email" name="email" id="email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} /> */}
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  // onChange={formik.handleChange}
                  onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
              />
                </div>
                <div className='form-div'>
                <label htmlFor="password">Password</label>
                {/* <input type="password" name="password" id="password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})}/> */}
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  // onChange={formik.handleChange}
                  onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
              />
                <span  onClick={handleShowPassword} style={{position:'absolute',marginTop:'50px',marginLeft:'380px',cursor:'pointer'}}><VisibilityOutlined/></span>
                </div>
                <div className='form-checkbox'>
                  <div className="checkbox">
                  <input type="checkbox" id="rememberMe" name="rememberMe" value="true"/>
                  <label htmlFor="vehicle1">Remember me</label>
                  </div>
                <p style={{textDecoration:'underline',color:'#58A0FF',fontSize:'14px'}}>Forgot Password</p>
                </div>
                
                <button type='submit' className='btn-login'>Sign In</button>
                
              </form>
            </div>
            </div>
        </div>
    </div>
  )
}
