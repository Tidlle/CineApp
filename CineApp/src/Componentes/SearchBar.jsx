// Componentes/SearchBar.jsx

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar filmes..."
                value={searchTerm}
                onChange={handleChange}
                className="px-2 py-1 border rounded"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
                Buscar
            </button>
        </form>
    );
}

export default SearchBar;
