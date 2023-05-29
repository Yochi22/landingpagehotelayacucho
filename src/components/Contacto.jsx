import React from 'react'
import Iframe from 'react-iframe'
import '../styles/mapa.css'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

export const Contacto = () => {
  return (
    <div id='Contact' className='mapa'>
    <h2 className="textprincipal text-2xl font-bold text-stone-500 mb-8">CONTÁCTANOS</h2>
    <h2 className='text-stone-500'>Carrera 15 con calle 44 y 45, Barquisimeto, Venezuela</h2>
    <div className='zonacontactanos'>
      <div className='telefono'>
      <a href="tel:+584245898302"><BsFillTelephoneOutboundFill /></a>
    </div>
    <h3 className='text-stone-500'>04245898302</h3>
    </div>
    <div className='map-responsive'>
    
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.4686939199205!2d-69.33749652547625!3d10.060628271989625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e876771aa1dab13%3A0x65e83f59f64fe98!2sHotel%20Ayacucho%20Plaza!5e0!3m2!1ses-419!2sco!4v1685338170532!5m2!1ses-419!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
</div>
    </div>
  )
}
