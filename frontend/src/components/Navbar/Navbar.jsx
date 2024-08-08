import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic en el ícono del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="fixed" className="bg-gray-800">
      <Toolbar className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-full flex py-6 justify-between items-center navbar w-[124px] h-[75px]">
          <img src={logo} alt="logo" className="w-40 h-auto" />
        </div>

        {/* Enlaces de navegación para pantallas grandes */}
        <div id= "navlinks" className="hidden md:flex space-x-12">
          <a href="#" className="text-white hover:text-red-400">
          Menu
          </a>
          <a href="#" className="text-white hover:text-red-400">
          Combos
          </a>
          <a href="#" className="text-white hover:text-red-400">
          Nosotros
          </a>
          <a href="#" className="text-white hover:text-red-400">
          Local
          </a>
        </div>

        {/* Icono del carrito, siempre alineado a la derecha */}
        <div className="flex items-center ml-auto">
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>

        {/* Botón del menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden ml-4">
          <IconButton onClick={toggleMenu} aria-label="Menu" color="inherit">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </IconButton>
        </div>
      </Toolbar>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden ">
          <a href="#" className="block px-4 py-2 text-white hover:bg-red-400">
            Menu
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-red-400">
          Combos
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-red-400">
          Nosotros 
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-red-400">
          Local 
          </a>
          
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
