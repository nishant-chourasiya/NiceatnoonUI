import React from 'react'
import Navbar from './navbar.jsx'
import Page2 from './Page2.jsx'
import Scroller from './scroller.jsx'
import Content from './content.jsx'
import Caseshead from './caseshead.jsx'
import Longimg from './longimg.jsx'
import Twodiv from './twodiv.jsx'
import Letsmeetbtncontent from './Components/Letsmeetbtncontent.jsx'
import Multiplecard from './Components/multiplecard.jsx'
import Dawncontent from './Components/dawncontent.jsx'
import OurbeliefHead from './Components/OurbeliefHead.jsx'
import Longimage2 from './Components/Longimage2.jsx'
import Rotateimg from './Components/rotateimg.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div className='bg-[#E4E4E4]  h-screen'>
      
      <Navbar/>
      <Page2 />
      <Scroller />
      <Content />
      <Caseshead />
      <Longimg />
      <Twodiv />
      <Letsmeetbtncontent />
      <Multiplecard />
      <Dawncontent />
      <OurbeliefHead />
      <Longimage2 />
      <Rotateimg />
      <Footer />
      
      
    
    </div>
  )
}

export default App