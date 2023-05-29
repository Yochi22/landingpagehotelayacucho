import React from 'react'
import fachada from '../assets/fachadafondo.svg'
import '../styles/nosotros.css'

export const Nosotros = () => {
  return (

<div className='containernosotros'>
  <div className="contenedor grid justify-center mx-auto max-w-screen-lg grid-cols-2 lg:grid-cols-2 gap-4">
    <div>
      <div className="max-w-500">
        <h1 className="textprincipal text-2xl font-bold text-stone-500 mb-2">CÓNOCENOS Y VIVE LA EXPERIENCIA</h1>
        <p className="textparrafo mb-4 text-stone-500">Somos un hotel familiar ubicado en el centro de la ciudad de Barquisimeto, con una vocación de servicio de calidad, excelencia y hospitalidad. Nuestra ubicación es privilegiada al estar cerca a sectores de interés turístico y fácil acceso a transporte. </p>
      </div>
    </div>
    <div>
      <img className='fotofachada' src={fachada} alt="fachada" />
    </div>
  </div>
</div>
  )
}

export default Nosotros
