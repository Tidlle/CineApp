// Pages/Filmes.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Componentes/SearchBar';

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then((response) => response.json())
            .then((response) => setFilmes(response.results))
            .catch((error) => console.log(error));
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = filmes.filter((filme) =>
            filme.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
    };

    const renderFilmes = searchResults.length > 0 ? searchResults : filmes;

    return (
        <div className="max-w-5xl mx-auto px-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">Filmes</h1>
            <div className="flex justify-center  mb-4">
                <SearchBar onSearch={handleSearch} /> {/* Barra de pesquisa centralizada */}
            </div>
            <div className="listaFilmes flex flex-row gap-3 flex-wrap">
                {renderFilmes.map((filme) => (
                    <div className="card-filme" key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} />
                        <h1 className='font-semibold mb-2'>{filme.title}</h1>
                        <Link to={`/filmes/${filme.id}`} className="bg-secondary-thompson text-black ml-[218px] p-[2px] px-[4px] rounded-md ">Saiba Mais</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filmes;
