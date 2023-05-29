import { useState } from 'react'
import Navbar from './components/Navbar'
import CarrouselOne from './components/CarrouselOne'
import Nosotros from './components/Nosotros'
import Carousel from './components/Carousel'
import CardContainer from './components/CardContainer'


function App() {

  return (
    <>
    <Navbar />
    <CarrouselOne />
    <Nosotros />
  <Carousel />
  <CardContainer />
    </>
  )
}

export default App
