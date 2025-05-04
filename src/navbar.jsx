import React from 'react'




const navbar = () => {
  return (
    <div className='h-10 w-full bg-[#E4E4E4] flex items-center justify-between space-x-12  p-9 '>
     <div className='ml-9'> <h1 className='h-12 text-5xl font-bold  animate-pulse'>NiceAtNoon</h1></div>
    <div>  <img className='h-16  ml-5 '
       style={{ animation: "logo-spin 4s linear infinite" }} 
    src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645505004e4ec0e72b8fc921_webclip-niceatnoon.webp" alt="" /></div>
     <div className=' space-x-14 '>
      <button className='border border-black  px-4 py-1 text-lg hover:underline rounded-md'>Projecten</button>
      <button  className='border border-black  px-4 py-1 text-lg hover:underline rounded'>Over</button>
      <button  className='border border-b-2 border-black  text-xl hover:underline text-black px-4 py-1 rounded'><a href="https://www.niceatnoon.nl/">Contact</a></button></div>
     
    </div>
   
  )
 
}

export default navbar