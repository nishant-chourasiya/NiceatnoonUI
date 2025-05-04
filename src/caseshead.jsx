import React from 'react'

const caseshead = () => {
  return (
    <div className='h-[75%] w-full bg-[#E4E4E4]'>
        <h3 className='flex items-center justify-center p-5'>Cases</h3>
        <div className=' items-center justify-center flex'><h1 className=' font-bold items-center justify-center p-16 text-9xl'>HEAD TURNING <br />
        <span className=' flex items-center justify-center '>PROJECTS</span>      </h1>
        <div className='w-44 h-14 bg-yellow-300 absolute flex items-center -mb-72 ml-96 justify-center rounded-3xl  -rotate-[10deg]'> Gotta see'm all</div>
        </div>
        <button className='border-2 border-black w-44 h-14 mb-2 rounded-2xl ml-[80%] group relative '> Alle Projecten <i class="ri-arrow-right-line ml-3" ></i>
        <span className="absolute bottom-2 left-5  w-0 h-0.5 bg-gray-800 transition-all duration-500 transform -translate-x group-hover:w-28"></span>
  
        </button>
       
    </div>
  )
}

export default caseshead