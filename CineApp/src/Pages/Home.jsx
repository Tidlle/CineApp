// Pages/Home.jsx

import React, { useState } from 'react';
import Header from '../Componentes/Header'; // Importe o componente Header aqui
import data from '../../artigos.json';
import SearchBar from '../Componentes/SearchBar';

function Home() {
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (searchTerm) => {
        const filtered = data.filter((filme) =>
            filme.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className=" max-w-5xl mx-auto px-4 mt-4">
            
            
            <div className="flex justify-center mt-4">
                <SearchBar onSearch={handleSearch} /> {/* Centraliza a barra de pesquisa abaixo do header */}
            </div>
            
            <div className='grid grid-cols-3 gap-4 mt-4'>
                {filteredData.map((filme, index) => (
                    <div className="card" key={index}>
                        
                        <img className='w-[300px] h-[220px] rounded-md' src={filme.image} alt={filme.title} />
                        <h1 className='text-2xl font-bold mb-2'>{filme.title}</h1>
                        <div className='text font-medium text-pentenary-thompson'>
                            {filme.text.map((text, textIndex) => (
                                <span className='p-1 m-1' key={textIndex}>
                                    {text}
                                </span>
                            ))}
                            <br />
                            <button className='bg-secondary-thompson text-black rounded-lg w-12 h-8 ml-64'>Ver</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
