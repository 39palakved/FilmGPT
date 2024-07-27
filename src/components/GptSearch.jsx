import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { LOGO } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
          <img  src={LOGO}
           alt="img"/>
           
         
        </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch

