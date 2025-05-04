import React from 'react'

const content = () => {
  return (
    <div className='h-1/3 w-full bg-[#E4E4E4]'>
      <p className='text-[1.65rem] p-14 '>NiceAtNoon is een fijnschalige design studio voor merken die de hoofden en de harten van hun publiek willen
veroveren. Geobsedeerd door de magie van design, geloven we sterk in de kracht van 'story-driven design';
het geeft jouw unieke merkverhaal geloofwaardigheid, zeggingskracht en een niet te negeren
aantrekkingskracht. Raak en verbind jouw doelgroepen als nooit tevoren!</p>
{/* <button className='w-56 h-14 rounded-md bg-slate-200 text-lg'> Leer ons kennen  <i class="ri-arrow-right-line ml-3" ></i></button>
    */}
    <button className="w-64 h-12 ml-14 rounded-md bg-white flex flex-col items-center justify-center group relative">
  <span className="text-gray-800 text-xl ml-2 p-5 ">Leer ons kennen <i class="ri-arrow-right-line ml-3" ></i></span>
  
  <span className="absolute bottom-2 left-8  w-0 h-0.5 bg-gray-800 transition-all duration-500 transform -translate-x group-hover:w-3/5"></span>
  
</button> 

    </div>
  )
}

export default content