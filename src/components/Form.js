import React from 'react';


const Form = ({setLyric}) => {


    const [search, setSearch] = React.useState({
        artist:'',
        song: ''
    })
    const [error, setError] = React.useState(false);

    const handleOnChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(search.artist.trim() === '' || search.song.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit} className="col card text-white bg-transparent mb-5 pt-5 pb-5">
                        <fieldset>
                            <legend className="text-center">Buscador de letras</legend>
                            <div className="row">
                                { (error) ? <div className="alert alert-danger w-100 text-center"> <strong>LLena los datos!</strong>😒</div> : null }
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input 
                                            type="text" 
                                            name="artist" 
                                            className="form-control"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                        <label htmlFor="">Cancion</label>
                                        <input 
                                            type="text" 
                                            name="song" 
                                            className="form-control"
                                            onChange={handleOnChange}
                                        />
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary float-right mt-5">
                                    Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;