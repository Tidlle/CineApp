// Componentes/Header.jsx

import React from 'react';
import Navbar from "./Navbar";

function Header() {
    return ( 
        <header className="flex bg-secondary-thompson text-white p-4 mb-4 justify-between">
            <h1>Bem-vindo ao Metflix!</h1>
            <Navbar/>
        </header>
     );
}

export default Header;
