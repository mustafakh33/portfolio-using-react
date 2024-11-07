import Btn from './components/6-scrollBTN/Btn'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'
function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 300 ){
        setShowScrollBTN(true);
      } else{
        setShowScrollBTN(false);
      }
    })
  })
  return (
    <div id='up'>
    <Header/>
    <Hero/>
    <Main/>
    <Contact/>
    <Footer/>
    <Btn showScrollBTN={showScrollBTN}/>
    </div>
  )
}

export default App
