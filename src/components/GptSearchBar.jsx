import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form
      className="w-full md:w-1/2 bg-black grid grid-cols-12 "
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        // ref={searchText}
        type="text"
        className=" p-3 m-4 col-span-9 text-black "
         placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button
        className="col-span-3 m-4 py-1 px-3 bg-red-700 text-white rounded-lg"
        // onClick={handleGptSearchClick}
      >
     {lang[langKey].search} 
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar
