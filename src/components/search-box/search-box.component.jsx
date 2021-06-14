import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder,handleChange }) => (
    <input 
    className = 'search-bx'
    type='search' 
    placeholder={ placeholder}
    onChange={handleChange}
    />
);