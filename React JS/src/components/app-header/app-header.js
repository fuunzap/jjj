import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className = 'app-header d-flex'>
            <h1> Bogdan Keplast </h1>
            <h2>All posts {allPosts}, Liked {liked}</h2>
        </div>
    )
}

export default AppHeader;