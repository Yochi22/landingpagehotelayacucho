
import React, { useState } from 'react';
import logo from '../assets/logo.jpg'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
  <>
  
  <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
  <div className="flex items-center flex-shrink-0 text-amber-800 mr-6">
    <img className='h-12' src={logo} alt="logo" />
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-amber-800 border-amber-800 hover:text-amber-800 hover:border-amber-800" onClick={toggleMenu}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`w-full block lg:flex lg:items-center lg:w-auto pr-14 ${isOpen ? '' : 'hidden'}`}>
    <div className="text-sm lg:flex-grow">
      <a href="#Home" className="mt-4 lg:inline-block lg:mt-0 font-bold text-stone-500 hover:text-amber-800 mr-4">
        INICIO
      </a>
      <a href="#Nosotros" className="mt-4 lg:inline-block lg:mt-0 font-bold text-stone-500 hover:text-amber-800 mr-4">
        NOSOTROS
      </a>
      <a href="#Rooms" className=" mt-4 lg:inline-block lg:mt-0 font-bold text-stone-500 hover:text-amber-800 mr-4">
        HABITACIONES
      </a>
    
      <a href="#Contact" className="mt-4 lg:inline-block lg:mt-0 font-bold text-stone-500 hover:text-amber-800">
        CONTACTO
      </a>

    </div>
  </div>
</nav>
  
  </>
  )
}

export default Navbar