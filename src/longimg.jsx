import React from 'react'

const longimg = () => {
  return (

//     <div className='w-full h-screen relative bg-[#E4E4E4]'>
//     {/* Full-height Image */}
//     <div className='p-14 w-full h-full'>
//         <img 
//             className='h-full w-full object-cover rounded-[50px] transition-all duration-300 group-hover:scale-105 group-hover:opacity-80' 
//             src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg" 
//             alt="" 
//         />
//     </div>

//     {/* Scrolling Content */}
//     <div className='overflow-auto h-auto relative'>
//         {/* Text Section */}
//         <div className='mb-8'>
//             <h6 className='ml-16 text-xl font-bold mb-1 text-slate-400'>Nieuw Schaijk</h6>
//             <h1 className='ml-16 text-3xl font-bold'>De smaak van thuis</h1>
//         </div>

//         {/* Buttons Section */}
//         <span className='flex p-12 gap-5'>
//             <button className='w-28 h-5 rounded-md text-sm bg-slate-300 border-[1px] border-black'>Brand Story</button>
//             <button className='w-32 text-sm h-5 rounded-md bg-slate-300 border-[1px] border-black'>Merkidentiteit</button>
//         </span>
//     </div>
// </div>

    <div className='w-full h-screen overflow-hidden bg-[#E4E4E4]'>
        <div className=' px-16 w-full h-[85%] flex relative item-center justify-center'>
          
        <div className="relative w-full h-full group ">
            <img className='h-full w-full object-cover rounded-3xl duration-700 hover:scale-95 transition-all ease-in-out  hover:rounded-[150px]' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg" alt="" />
            
            <div className="w-72 h-80 rounded-[30%] overflow-hidden bg-red-200 hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img className="w-full h-full object-cover " src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/67a0cba197bd4190597852c8_SALUD_Header-Nan-min-p-1080.jpg" alt="" />
            </div>

          
            </div>
        </div>

        <div className='flex-start items-center ml-16 relative z-0'>

             <h6 className=' text-xl font-bold mt-0 text-slate-400'>Nieuw Schaijk</h6>
             <h1 className=' text-3xl mt-1 font-bold'>De smaak van thuis</h1>
 
    <button className='px-5 py-0 h-6 mt-3 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
     BRAND STORY
    </button>
    <button className='px-5 py-0 mt-3 h-6 ml-9 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
      
      MERKIDENTITEIT
    </button>
  </div>
    </div>  
  )
}

export default longimg