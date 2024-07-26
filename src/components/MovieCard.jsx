import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCard = (
{poster}) => {
  return (
    <div className='w-36 md:w-48 pr-4 '>
      <img src={IMG_CDN_URL + poster
} alt="Movie Card"></img>
    </div>
  )
}

export default MovieCard
