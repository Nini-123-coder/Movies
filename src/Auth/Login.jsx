
import React, { useEffect, useState } from 'react'
import { MainBody, Wrapper, 
  Header, SignUpFrom, TextHeader, Input,Button,Or,FormText,
  InputPasswordDiv, PassInfo 

} from './AuthStyle'
import { FcGoogle } from "react-icons/fc";
import LoadingScreen from './LoadingScreen'
import {toast, Toaster} from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
    const [toggle, setToggle] = useState(true)
    const [email, setEmail] = useState()
    const [passWord, setPassword] = useState()
    const [emailerror, setEmailError] = useState()
    const [emailerrorshow, setEmailErrorShow] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [Loading, setLoading] = useState(false)

   const Nav = useNavigate()
   
    const MyshowPassword = ()=> {
       setShowPassword(false)
    }
   
   const validateEmail = (input) => {
     // Regular expression for basic email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(input);
   };
   
   const handleEmailChange = (e) => {
     const newEmail = e.target.value;
     setEmail(newEmail);
   
     // Validate the email
     if(newEmail.trim() === '') {
         toast.error('Email is required');
       setEmailErrorShow(false)
     }else if (!validateEmail(newEmail)) {
       setEmailErrorShow(true)
       setEmailError('Invalid email format');
     } else {
       setEmailError("")
     }
   };
    
    const handlePassword = (e) => {
     const newData  = e.target.value
     setPassword(newData)
     if(newData.trim() === ""){
         toast.error("Password is required")
    }
}
   
   const handleLogin = () =>{
    if ( !email || !passWord) {
      toast.error("User Data Is Required")
    }else{
      setLoading (true)
      const userDetails = {email, password:passWord}
      const url = "https://classmovback.onrender.com/api/login"
      axios.post(url, userDetails)
      .then(res =>{
        toast.success(res.data.message)
        console.log(res);

        Nav(`/LandingPage/${res.data._id}`)
      })
      .catch((err)=>{
        console.log(err)
      })
   }
  }
     useEffect(()=>{
       setTimeout(() => {
         setToggle(false)
       }, 5000);
     });


   
     return (
       <MainBody>
         {
           toggle ? 
           <LoadingScreen/>:
           <>
           <Wrapper>
           <Header>NiNi <span>Movie Room</span></Header>
               <SignUpFrom>
                   <TextHeader>
                     <h3>Login</h3>
                   </TextHeader> 
                   <Input type='email' placeholder='Email' hg wd br bg onChange={handleEmailChange}/>
                   {
                     emailerrorshow ? <p
                     style={{
                       color: "lightgray",
                       margin: "0px",
                       padding: "0px"
                     }}
                   >{emailerror}</p> : null
                   }
                   <InputPasswordDiv>
                   <Input type={showPassword ? "password" : "text"} placeholder='Password'  onChange={handlePassword}/>
                     {
                       showPassword ?
                       <FaRegEye 
                     onClick={MyshowPassword}
                     style={{
                       color: "white",
                       fontSize: "18px",
                       cursor: "pointer",
                       marginRight: "5px"
                     }}/>:
                     <FaRegEyeSlash
                     onClick={()=>setShowPassword(true)}
                     style={{
                       color: "white",
                       fontSize: "20px",
                       cursor: "pointer"
                     }}
                     />
   
                     }
                   </InputPasswordDiv>
                   <Button onClick={handleLogin} Bg>{Loading? 'Loading...': "Login"}</Button>
                   <Or>Or</Or>
                   <Button> <FcGoogle/> Login with Google</Button>
                     <FormText hv onClick={()=> Nav('/ForgotPassWord')}>Forgot password?</FormText>
                     <FormText>Do not have an Account <span onClick={()=> Nav("/signup")}> Sign up</span></FormText>
               </SignUpFrom>
           </Wrapper>
           </>
           
         }
           
         <Toaster/>
       </MainBody>
     )
}

export default Login
