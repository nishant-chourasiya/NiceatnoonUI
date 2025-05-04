import React from 'react'

const Page2 = () => {
  return (
    <div className='w-full h-1/2 flex p-20  bg-[#E4E4E4] '>
       <div className='w-1/2 h-full  text-7xl gap-5 '>
      <span className=' hover:text-yellow-700 transition-colors duration-200'> Turning heads </span><br />
       and conquering <br />
       <span className='flex'>hearts <img className='h-16 ml-3 mt-4 rounded-full '
        style={{ animation: "spin 4s linear infinite" }} 
        src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645505004e4ec0e72b8fc921_webclip-niceatnoon.webp" alt="" />
       </span>
       
        </div>
       <div className='w-1/2 h-full mt-30 ml-52 bg-[#E4E4E4]'>
       <div className='ml-56 text-xl  '>
               NiceAtNoon is een boutique design <br />
               studio gespecialiseerd in branding en <br />
               webdesign.
       </div> <br />
       <button className='ml-56 group relative py-1 bg-white rounded-lg h-12 w-40  mt-1'> Bekijk projecten 
        <span className='ml-3'> <i class="ri-arrow-right-fill "> </i> </span>

        <span className="absolute bottom-0 left-2 mb-3 w-0 h-0.5 bg-gray-800 transition-all duration-500 transform group-hover:w-28"></span>
       
       </button>
       </div>
    </div>
  )
}

export default Page2