import React from 'react'
import Header from './Header'
import { MainPageBody, Wrapper, CardBody, Card, CardImageHolder, CardText, CardDescription, CardIcons } from "./LandingStyle"
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaHeart, FaRegStarHalfStroke } from 'react-icons/fa6'
import data from '../Page/Data.json'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const myNewData = Object.values(data)
  console.log("This is my new data", myNewData)

  const Nav = useNavigate()

  return (
      <MainPageBody>
      <Header/>
        <Wrapper>
          <CardBody>
            {
              myNewData?.map((e)=>(
                <Card onClick={()=> Nav(`/Details/${e.title}`)}>
                <CardImageHolder>
                    <img src={e?.cardImg} alt="" />
                </CardImageHolder>
                <CardText>{e.title}</CardText>
                <CardDescription>{e.description}</CardDescription>
                <CardIcons>
                  <span><FaHeart/></span>
                  <span><BsFillBookmarkHeartFill/></span>
                  <span><FaRegStarHalfStroke/></span>
                </CardIcons>
              </Card>
              ))
            }
          </CardBody>
        </Wrapper>
      </MainPageBody>
  )
}

export default LandingPage

