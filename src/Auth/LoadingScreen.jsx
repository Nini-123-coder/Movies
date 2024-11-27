import React from 'react'
import styled from 'styled-components'
import {  RingLoader } from 'react-spinners'

const LoadingScreen = () => {
  return (
    <MainBody>
        <RingLoader color='yellow'
        size={250}
        />
    </MainBody>
  )
}

export default LoadingScreen

const MainBody = styled.div`
    width: 100%;
    height: 100vh;
    background: url(src/assets/load.png);
    background-size: cover;
    display: flex;
    margin: 0px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`