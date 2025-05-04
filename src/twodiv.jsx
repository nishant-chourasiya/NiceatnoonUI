import React from 'react'

const twodiv = () => {
  return (
    <div className=' w-full h-screen flex px-20 overflow-hidden py-3 gap-11 bg-[#E4E4E4]'>
      <div className='w-1/2 h-full mt-2 bg-[#E4E4E4]'>
      
        <div className='w-full h-[500px] relative rounded-3xl object-contain overflow-hidden '>

        <div className="relative w-full h-full group overflow-hidden  hover:rounded-[120px] ">
          
        <img className='h-full w-full object-cover duration-700 hover:scale-110 transition-all ease-in-out ' src=" https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg " alt="" />
         
         <div className='w-60 rounded-2xl h-60 overflow-hidden  bg-slate-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <img  className ="w-full h-full object-cover" src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/679ce3e20a6c6bdb0bcf8d90_MAX_ARTD-C02-Screen-NaN-min-p-2000.jpg" alt="" />
         </div>
         </div>
        </div>

        {/* https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg */}
     
        <div className='flex-start items-center py-7 relative z-0'>

             <h6 className=' text-xl font-bold mt-0 text-slate-400'>Gaaf Creaties</h6>
             <h1 className=' text-2xl mt-1 font-bold'>
Creating mood-boosting experiences
</h1>
 
    <button className='px-5 py-0 h-6 mt-4 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
     BRAND STORY
    </button>
   
    <button className='px-5 py-0 mt-4 h-6 ml-9 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
      
      MERKIDENTITEIT
    </button>
    <button className='px-5 py-0 h-6 mt-4 ml-9 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
     WEBDESIGN
    </button>
  </div>
      </div>
        <div className='w-1/2 h-screen bg-[#E4E4E4]'>
        <div className='w-full h-[80%] overflow-hidden object-contain rounded-3xl bg-rose-300'>
          <img className='h-full w-full object-cover duration-700 hover:scale-110 transition-all ease-in-out' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-2000.jpg" alt="" />
        </div>
        <div className='flex-start items-center py-5 relative z-0'>

<h6 className=' text-xl font-bold mt-0 text-slate-400'>

Don't Mind</h6>
<h1 className=' text-2xl mt-1 font-bold'>
Campaigners for eventful brands
</h1>

<button className='px-5 py-0 h-6 mt-4 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
BRAND STORY
</button>

<button className='px-5 py-0 mt-4 h-6 ml-9 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>

MERKIDENTITEIT
</button>
<button className='px-5 py-0 h-6 mt-4 ml-9 capitalize rounded-full text-xs bg-[#E4E4E4] border-[1px] border-black'>
WEBDESIGN
</button>
</div>


        </div>
     
        

    </div>
  )
}

export default twodiv