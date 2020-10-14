import React from 'react';

const Song = ({lyric}) => {
    return (
        <>
            <h2>Letra de la cancion</h2>
            <p className="letra">{lyric}</p>    
        </>
    );
};

export default Song;