import React, {Fragment} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Information from './components/Information';


function App() {
  const [lyric, setLyric] = useState({});
  const [musicletter, setResponse] = useState('');
  const [information, setInformation] = useState({});

  useEffect(() => {

    if(Object.keys(lyric).length===0) return;
    
    const callApi = async () => {

        const {artist,song} = lyric;
              
        const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        const res = await fetch(URL);
        const data = await res.json();
        setResponse(data.lyrics);

        const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        const res2 = await fetch(URL2);
        const data2 = await res2.json();
        console.log(data2.artists[0]);
        setInformation(data2.artists[0]);

    }
    callApi();

  },[lyric])

  return (
    <>
      <Form setLyric={setLyric}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Song 
              response={musicletter}  
            />
          </div>
          <div className="col-md-6">
            <Information
              information={information}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
