import { useState, useEffect } from "react";
import Carousel1 from '../assets/carousel1.jpg'
import Carousel2 from '../assets/carousel2.jpg'
import Carousel3 from '../assets/carousel3.jpg'
import Carousel4 from '../assets/carousel4.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import "../styles/carousel.css"

const CarrouselOne = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      {
        id: 1,
        url: Carousel1,
        alt: "Image 1",
      },
      {
        id: 2,
        url: Carousel2,
        alt: "Image 2",
      },
      {
        id: 3,
        url: Carousel3,
        alt: "Image 3",
      },

      {
        id: 4,
        url: Carousel4,
        alt: "Image 4",
      },
    ];
  
    const handlePrev = () => {
        if (currentIndex === 0) {
          setCurrentIndex(images.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      };
    
      const handleNext = () => {
        if (currentIndex === images.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 3000);
    
        return () => clearInterval(interval);
      }, [currentIndex]);
    
      return (
        
        <div className="carousel flex justify-center">
            <div className="titulo">
                <hr />
                <h3>Confort y economía</h3>
                <hr />
            </div>
          <div className="w-7/12">
            <div className="relative h-96 my-10 ">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-between">
                <button onClick={handlePrev} className="arrow">
                  {' '}
                  {AiOutlineArrowLeft} &lt;
                </button>
                <button onClick={handleNext} className="arrow">
                  {' '}
                  {AiOutlineArrowRight} &gt;
                </button>
              </div>
            </div>
          </div>


</div>




      );
    };

export default CarrouselOne