
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
import axios from 'axios'


const SignUp = () => {
 const [toggle, setToggle] = useState(false)
 const [userName, setUserName] = useState()
 const [email, setEmail] = useState()
 const [passWord, setPassword] = useState()
 const [emailerror, setEmailError] = useState()
 const [emailerrorshow, setEmailErrorShow] = useState(false)
 const [showPassword, setShowPassword] = useState(true)
 const [passwordCheck, setPasswordCheck] = useState(false)
 const [passwordErrorlow, setPasswordErrorLow] = useState("");
const [passwordErrorUpper, setPasswordErrorUpper] = useState();
const [passwordErrorNumber, setPasswordErrorNumber] = useState();
const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
const [Loading, setLoading] = useState(false);

const Nav = useNavigate()


 const MyshowPassword = ()=> {
    setShowPassword(false)
 }

 const containsLowercase = (input) => {
  // Check if the input string contains at least one lowercase character
  return /[a-z]/.test(input);
};

const containsUpperrcase = (input) => {
  // Check if the input string contains at least one lowercase character
  return /[A-Z]/.test(input);
};

const containsNumber = (input) => {
  // Check if the input string conta;ins at least one number
  return /\d/.test(input);
};

const containsSymbol = (input) => {
  // Check if the input string contains at least one symbol (special character)
  return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
};

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

const handleUserName = (e) => {
  const newData  = e.target.value
  setUserName(newData)
}

 

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
  });

  const handleSignUp = async () => {
    const url = "https://classmovback.onrender.com/api"
    if(!userName || !email || !passWord){
      toast.error("All fields needs to filled")
    }else{
      setLoading(true)
      
      try{
        const userDetails = {
          userName: userName,
          email: email,
          password: passWord,
        }
        
        const res = await axios.post(`${url}/register`, userDetails)
        console.log(res)
        setLoading(false)
        toast.success(res?.data.message)

      }catch (error){
        console.log(error)
        setLoading(false)

        toast.error(error?.response.data.message)
      }
    }
  }

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
                  <h3>Sign Up</h3>
                </TextHeader> 
                <Input type='text' placeholder='Username' hg wd br bg onChange={handleUserName}/>
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
                
                <Button  onClick={handleSignUp} Bg>
                  {Loading? "Loading..." : "Sign Up"}
                </Button>
                <Or>Or</Or>
                <Button> <FcGoogle/> Sign up with Google</Button>
                  {/* <FormText>Forgot password?</FormText> */}
                  <FormText>Already have an Account <span onClick={()=> Nav("/")}> Login In</span></FormText>
            </SignUpFrom>
        </Wrapper>
        </>
        
      }
        
      <Toaster/>
    </MainBody>
  )
}

export default SignUp
