import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs'
import '../styles/carouselhab.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import habitaciondoble1 from '../assets/habitaciondoble1.jpg'
import habitaciondoble2 from '../assets/habitaciondoble2.jpg'
import habitaciondoble3 from '../assets/habitaciondoble3.jpg'
import habitaciontriple from '../assets/habitaciontriple.jpg'




const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      title: 'Habitación matrimonial',
      description: 'Habitación confortable con una cama matrimonial.',
      code: 'https://api.whatsapp.com/send?phone=584245898302&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20la%20habitaci%C3%B3n%20matrimonial',
      image: habitaciondoble1
    },
    {
      id: 2,
      title: 'Habitación matrimonial',
      description: 'Habitación confortable con una cama matrimonial.',
      code: 'https://api.whatsapp.com/send?phone=584245898302&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20la%20habitaci%C3%B3n%20matrimonial',
      image: habitaciondoble2
    },
    {
      id: 3,
      title: 'Habitación matrimonial',
      description: 'Habitación confortable con una cama matrimonial.',
      code: 'https://api.whatsapp.com/send?phone=584245898302&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20la%20habitaci%C3%B3n%20matrimonial',
      image: habitaciondoble3
    },

    {
        id: 4,
        title: 'Habitación triple',
        description: 'Habitación confortable con una cama matrimonial y una cama individual.',
        code: 'https://api.whatsapp.com/send?phone=584245898302&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20la%20habitaci%C3%B3n%20triple',
        image: habitaciontriple
      }
  ];

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className='container'>
        <div className='titulohabitaciones'>
        <h2>NUESTRAS HABITACIONES</h2>
        </div>
      <div>
        {data.map((card, index) => (
          <div key={card.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <img src={card.image} alt={card.title} />
            <h2 className='cardtitle'>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.code} target='_blank' className='pedir-whatsapp'><BsWhatsapp/></a>
            <button className='arrowright' onClick={handleNextCard}><AiOutlineArrowRight /></button>
          </div>
        ))}
      </div>
     
    </div>
  );
};


export default Carousel;
