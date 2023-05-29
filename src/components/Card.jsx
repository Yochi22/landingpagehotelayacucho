import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3 className='tituloservicios'>{title}</h3>
   <div className='iconcard'>{content}</div>
    </div>
  );
};

export default Card;