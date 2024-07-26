import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className=' w-screen  aspect-video pt-[17%] px-24 absolute bg-gradient-to-r from-black' >
      <h1 className=' font-bold text-5xl text-white '>
       {title}
      </h1>
      <p className='text-lg py-6 w-1/3 text-white'>{overview}</p>
      <div>
      <button className='bg-white text-black  border-gray-300 border-2  border-solid py-3 px-6 text-xl font-bold mx-4 rounded-lg'>
      ▶ Play
      </button>
      <button className='bg-gray-500  text-white  border-2 bg-opacity-35s border-stone-500 border-solid py-3 px-6 text-lg  mx-2 rounded-lg'>
      
More Info
     </button>
      </div>
     
    </div>
  )
}

export default VedioTitle
