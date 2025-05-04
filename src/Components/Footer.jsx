import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen w-full text-white bg-black '>
        <div className='w-full h-[55%] flex justify-between p-16 '>

        <div className=' items-start'>
            <h1 className='text-5xl font-myFont'>Let's turn some heads!</h1> <br />
            <button className='relative group border-white border px-5 text-xl rounded-lg py-2 transition-all-ease duration-500 hover:rounded-full'>
  Contact 
  <i className="ri-arrow-right-line ml-3"></i>

  <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-1s group-hover:w-1/2 ml-5 "></span>
</button>


        </div>

        <div className=' flex gap-10 '>
            <div className=''>
                <h1 className='font-myFont'>Socials </h1>
                <ul className='mt-5 '>
                        <li className='mt-3'>INSTAGRAM</li>
                        <li className='mt-3'>LINKEDIN</li>
                        
                    </ul>
            </div>
            <div className=''>
                <h1 className='font-myFont'>Sitemap</h1>
                <ul className='mt-5'>
                        <li className='mt-3' >HOME</li>
                        <li className='mt-3'>PROJECTEN</li>
                        <li className='mt-3'>OVER</li>
                        <li className='mt-3'>CONTACT</li>
                        
                    </ul>

            </div>
            <div className=''>
                <h1 className='font-myFont'>Info </h1>
                <ul className='mt-5'>
                        <li className='mt-3'>ALGEMENE VOORWAARDEN</li>
                        <li className='mt-3'>PRIVACYBELEID</li>
                        <li className='mt-3'>COOKIEBELEID</li>
                      </ul>

            </div>
        </div>
        </div>

      <div className='flex w-full h-[45%] '>
        <img className='p-7 mb-2 ml-1'  src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png" alt="" />
      </div>
 

        </div>

       
  )
}

export default Footer;