
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

const ForgotPassWord = () => {
    const [toggle, setToggle] = useState(false)
    const [email, setEmail] = useState()
    const [passWord, setPassword] = useState()
    const [emailerror, setEmailError] = useState()
    const [emailerrorshow, setEmailErrorShow] = useState(false)
    const [showPassword, setShowPassword] = useState(true)

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
   
   
   
     useEffect(()=>{
       setTimeout(() => {
         setToggle(false)
       }, 5000);
     })
   
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
                     <h3>Forgot password</h3>
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
                   <Button Bg onClick={()=> Nav("/resetpassword")}> Submit </Button>
                     <FormText>Already have an Account <span onClick={()=> Nav("/")}> Login</span></FormText>
               </SignUpFrom>
           </Wrapper>
           </>
           
         }
           
         <Toaster/>
       </MainBody>
     )
}

export default ForgotPassWord
