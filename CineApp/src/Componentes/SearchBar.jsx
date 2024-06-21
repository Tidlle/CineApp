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
        <form onSubmit={handleSubmit} className= " flex items-center ">
            <input
                type="text"
                placeholder="Buscar filmes..."
                value={searchTerm}
                onChange={handleChange}
                className="w-screen h-10 px-3 py-1 rounded-lg bg-tertiary-thompson border border-gray-300 focus:outline-none focus:border-blue-500 max-w-screen-md   "
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
                Buscar
            </button>
        </form>
    );
}

export default SearchBar;
