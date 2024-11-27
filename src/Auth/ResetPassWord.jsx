
import React, { useEffect, useState } from 'react'
import { MainBody, Wrapper, 
  Header, SignUpFrom, TextHeader, Input,Button,Or,FormText,
  InputPasswordDiv, PassInfo 

} from './AuthStyle'
import { FcGoogle } from "react-icons/fc";
import LoadingScreen from './LoadingScreen';
import {toast, Toaster} from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const RestPassword = () => {
    const [toggle, setToggle] = useState(false)
    const [email, setEmail] = useState()
    const [passWord, setPassword] = useState()
    const [emailerror, setEmailError] = useState()
    const [emailerrorshow, setEmailErrorShow] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [passwordErrorlow, setPasswordErrorLow] = useState("");
    const [passwordErrorUpper, setPasswordErrorUpper] = useState();
    const [passwordErrorNumber, setPasswordErrorNumber] = useState();
    const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
    const [passwordCheck, setPasswordCheck] = useState(false)


   const Nav = useNavigate()
   
    const MyshowPassword = ()=> {
       setShowPassword(false)
    }
   
   const validateEmail = (input) => {
     // Regular expression for basic email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(input);
   };
   
   const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };
  
  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };
  
  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };
  
  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };
    
    const handlePassword = (e) => {
        const newData  = e.target.value
        setPassword(newData)
        if(newData.trim() === ""){
            toast.error("Password is required")
            setPasswordCheck(false)
        }if (newData.length > 0){
          setPasswordCheck(true)
        }if(!containsLowercase(newData)){
          setPasswordErrorLow(true)
        }else{
          setPasswordErrorLow(false)
        }if(!containsUpperrcase(newData)){
          setPasswordErrorUpper(true)
        }else{
          setPasswordErrorUpper(false)
        }if(!containsNumber(newData)){
          setPasswordErrorNumber(true)
        }else{
          setPasswordErrorNumber(false)
        }if(!containsSymbol(newData)){
          setPasswordErrorSymbol(true)
        }else{
          setPasswordErrorSymbol(false)
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
                     <h3>Reset Password</h3>
                   </TextHeader> 
                   <InputPasswordDiv>
                   <Input type={showPassword ? "password" : "text"} placeholder='New Password'  onChange={handlePassword}/>
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
                   {
                    passwordCheck ? 
                    <PassInfo>
                    {
                      passwordErrorlow ? <span>Lowercase</span> : null
                    }
                    {
                      passwordErrorUpper ? <span>Capital</span> : null
                    }
                    {
                      passwordErrorNumber ? <span>Number</span> : null
                    }
                    {
                      passwordErrorSymbol ? <span>Symbol</span> : null
                    }
                  </PassInfo>: null
                  }
                   <InputPasswordDiv>
                   <Input type={showPassword ? "password" : "text"} placeholder='Confirm Password'  onChange={handlePassword}/>
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
                   <Button  onClick={()=> Nav("/")} Bg>Reset Password </Button>
                   {/* <Or>Or</Or>
                   <Button> <FcGoogle/> Login with Google</Button> */}
                     {/* <FormText hv onClick={()=> Nav('/forgot-password')}>Forgot password?</FormText> */}
                     <FormText>Do not have an Account <span onClick={()=> Nav("/signup")}> Sign up</span></FormText>
               </SignUpFrom>
           </Wrapper>
           </>
           
         }
           
         <Toaster/>
       </MainBody>
     )
}

export default RestPassword
