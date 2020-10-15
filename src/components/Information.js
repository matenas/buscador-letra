import React from 'react';

const Information = ({information}) => {

    const {strArtistThumb, strBiographyES,strGenre} = information;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información de la Banda o Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt=""/>
                <p className="card-text">Genero: {strGenre}</p>
                <p className="card-text">{strBiographyES}</p>
            </div>
        </div>
    );
};

export default Information;