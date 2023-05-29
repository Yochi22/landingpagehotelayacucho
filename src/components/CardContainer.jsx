import React from 'react';
import Card from './Card';
import '../styles/card.css'
import { FaParking } from 'react-icons/fa';
import { FiWifi } from 'react-icons/fi';
import { FaHotel } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa';

const CardContainer = () => {
  const cardData = [
    {
      title: 'ESTACIONAMIENTO',
      content: <FaParking />,
    },
    {
      title: 'WIFI',
      content: <FiWifi />,
    },
    {
      title: 'RECEPCIÓN 24 HR',
      content: <FaHotel />,
    },
    {
      title: 'AGUA CALIENTE',
      content: <FaShower />,
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardContainer;
