import React from 'react'
import { DetailsMainBody, DetailsMainWrapper, DetailsMainWrapperBody,
  DetailsImg, DetailsMovieDetails, MovieDetailsTitle, MovieDetailsDesc, Button
 } from './DetailsStyle'
import Header from '../Page/Header'
import { useParams } from 'react-router-dom'
import data from '../Page/Data.json'


const Details = () => {
  const {title} = useParams()
  console.log(title)
  const ArrayedData = Object.values(data)
  const exactMovie = ArrayedData.filter(data => data.title === title)
  const filterexactMovie = exactMovie[0]
  console.log(filterexactMovie)

  return (
    <DetailsMainBody style={{backgroundImage: `url(${filterexactMovie.backgroundImg})` }}>
      <Header/>
      <DetailsMainWrapper>
      <DetailsMainWrapperBody>
        <DetailsImg>
          <img src={filterexactMovie.cardImg} alt={filterexactMovie.title} />
        </DetailsImg>
        <DetailsMovieDetails>
          <MovieDetailsTitle>{filterexactMovie.title}</MovieDetailsTitle>
          <MovieDetailsDesc>
          {filterexactMovie.description}
            </MovieDetailsDesc>
            <Button>Play Now</Button>
            <Button>Watch Later</Button>
        </DetailsMovieDetails>
      </DetailsMainWrapperBody>
      </DetailsMainWrapper>
    </DetailsMainBody>
  )
}

export default Details
