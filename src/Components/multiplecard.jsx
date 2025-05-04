import React from 'react'

const multiplecard = () => {
  return (
    <div className='w-full h-screen  bg-[#E4E4E4] '>

        <div className='w-full h-44 bg-[#E4E4E4]'>
            <h6 className='ml-16 font-bold'>Services</h6>
            <div className="flex-start flex m-14 items-center justify-between">
  <h2 className="text-4xl ">
    Zo onderscheiden we je <br />
    van de norm
  </h2>
  <button className="px-5  ml-96 h-14 rounded-xl text-md bg-black text-white">
    Lees Meer <i className="ri-arrow-right-line ml-5"></i>
  </button>
</div>
{/* 
Sterke merken verzinnen geen fabels, maar zitten al vol mooie verhalen die het waard zijn om goed verteld te worden. In onze Brand Story Sessies gaan we op zoek naar die verhalen. */}
        </div>

        <div  className='flex gap-5 px-10 py-2 bg-ros'> 
        <div className='w-[350px] rounded-2xl overflow-hidden h-[500px] bg-[#7d448b]'>
            <div className='bg-slate-400 w-full h-[55%]'>
              <img className='w-full h-full bg-contain object-cover' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg" alt="" />
            </div>

            <div className='w-full h-[45%] bg-[#AA81B7] text-white '>
             <div className='flex  justify-between'>
             <h1 className='text-3xl p-4'>Brand story</h1>
             <i  class="ri-arrow-right-line text-2xl p-5 "></i>
             </div>

             <p className='px-5 py-2 text-lg'>Sterke merken verzinnen geen fabels, maar zitten al vol mooie verhalen die het waard zijn om goed verteld te worden. In onze Brand Story</p>

            </div>

        </div>
          <div className='w-[350px] rounded-2xl overflow-hidden h-[500px] bg-[#7d448b]'>
            <div className='bg-slate-400 w-full h-[55%]'>
              <img className='w-full h-full bg-contain object-cover' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg" alt="" />
            </div>

            <div className='w-full h-[45%] bg-[#000000] text-white '>
             <div className='flex  justify-between'>
             <h1 className='text-3xl p-4'>Brand story</h1>
             <i  class="ri-arrow-right-line text-2xl p-5 "></i>
             </div>

             <p className='px-5 py-2 text-lg'>Sterke merken verzinnen geen fabels, maar zitten al vol mooie verhalen die het waard zijn om goed verteld te worden. In onze Brand Story</p>

            </div>

            

        </div>

        <div className='w-[350px] rounded-2xl overflow-hidden h-[500px] bg-[#7d448b]'>
            <div className='bg-slate-400 w-full h-[55%]'>
              <img className='w-full h-full bg-contain object-cover' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg" alt="" />
            </div>

            <div className='w-full h-[45%] bg-[#36A96A] text-white '>
             <div className='flex  justify-between'>
             <h1 className='text-3xl p-4'>Brand story</h1>
             <i  class="ri-arrow-right-line text-2xl p-5 "></i>
             </div>

             <p className='px-5 py-2 text-lg'>Sterke merken verzinnen geen fabels, maar zitten al vol mooie verhalen die het waard zijn om goed verteld te worden. In onze Brand Story</p>

            </div>

        </div>

        <div className='w-[350px] rounded-2xl overflow-hidden h-[500px] bg-[#7d448b]'>
            <div className='bg-slate-400 w-full h-[55%]'>
              <img className='w-full h-full bg-contain object-cover' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-500.jpg" alt="" />
            </div>

            <div className='w-full h-[45%] bg-[#FA8A58] text-white '>
             <div className='flex  justify-between'>
             <h1 className='text-3xl p-4'>Brand story</h1>
             <i  class="ri-arrow-right-line text-2xl p-5 "></i>
             </div>

             <p className='px-5 py-2 text-lg'>Sterke merken verzinnen geen fabels, maar zitten al vol mooie verhalen die het waard zijn om goed verteld te worden. In onze Brand Story</p>

            </div>

        </div>


           </div>
    </div>
  )
}

export default multiplecard