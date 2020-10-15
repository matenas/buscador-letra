import React from 'react';

const Song = ({response}) => {

    return (
        <>
            <h2>Letra de la cancion</h2>
            <p className="letra">{response}</p>    
        </>
    );
};

export default Song;