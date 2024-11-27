import React from 'react'
import './App.css'
import {HashRouter, Routes, Route } from 'react-router-dom'
import LoadingScreen from './Auth/LoadingScreen'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import LandingPage from './Page/LandingPage'
import ForgotPassWord from './Auth/ForgotPassWord'
import RestPassword from './Auth/ResetPassWord'
import Details from './Description/Details'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/LoadingScreen' element = {<LoadingScreen/>} />
        <Route path='/' element = {<Login/>} />
        <Route path='/LandingPage/:userId' element = {<LandingPage/>} />
        <Route path='/Details/:title' element = {<Details/>} />
        <Route path='/SignUp' element = {<SignUp/>} />
        <Route path='/ForgotPassWord' element = {<ForgotPassWord/>} />
        <Route path='/ResetPassword' element = {<RestPassword/>} />
      </Routes>
    </HashRouter>
  )
}

export default App