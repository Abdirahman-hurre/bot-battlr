// src/components/SortBar.js

import React from 'react';

const SortBar = ({ sortBy }) => {
    return (
        <div>
            <h2>Sort Bots By</h2>
            <button onClick={() => sortBy('health')}>Health</button>
            <button onClick={() => sortBy('damage')}>Damage</button>
            <button onClick={() => sortBy('armor')}>Armor</button>
        </div>
    );
};

export default SortBar;
