import { useState } from 'react'
import Navbar from './components/Navbar'
import CarrouselOne from './components/CarrouselOne'
import Nosotros from './components/Nosotros'
import Carousel from './components/Carousel'
import CardContainer from './components/CardContainer'
import { Contacto } from './components/Contacto'
import RedesSociales from './components/RedesSociales'

function App() {

  return (
    <>
    <Navbar />
    <CarrouselOne />
    <Nosotros />
  <Carousel />
  <CardContainer />
  <Contacto />
  <RedesSociales />
    </>
  )
}

export default App
