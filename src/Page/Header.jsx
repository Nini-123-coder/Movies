import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Header = () => {
    const [userData, setUserData] = useState()

    const {userId} = useParams()
    const getUserData = ()=>{
        const url= `https://classmovback.onrender.com/api/userdata/${userId}`
        axios.get(url)
        .then(res =>{
            console.log(res)
            setUserData(res?.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getUserData()
    },[])
  return (
    <HeaderBody>
        <HeaderWrapper>
            <Logo >NiNi <span>Movie Room</span></Logo>
            <NavRight>
                <UserName>{userData?.userName}</UserName>
                <Button>Log Out</Button>
            </NavRight>
        </HeaderWrapper>
    </HeaderBody>
  )
}

export default Header

const Button = styled.button`
    color: yellow;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color:black;
`

const UserName = styled.div`
    width: max-content;
    font-size: 18px;
    font-family: 'Poppins', 'sans-serif';
    padding: 20px;
    color:white;
    display: flex;
    justify-content: center;
`

const NavRight = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
`

const Logo = styled.div`
    height: 90px;
    /* background-color: #ffae00; */
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    padding: 20px;
    font-size: 30px;
    gap: 10px;
    font-weight: 800;
    color: white;

    span {
      color: yellow;
    }`

const HeaderWrapper = styled.div`
    width: 90%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content:space-between;

`

const HeaderBody = styled.div`
    width:100%;
    height: 90px;
    display: flex;
    background-color: black;
    justify-content: center;
`