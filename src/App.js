import React, {Fragment} from 'react';
import { useState } from 'react';
import Form from './components/Form';
import Song from './components/Song';


function App() {
  const [lyric, setLyric] = useState('');
  return (
    <Fragment>
      <Form setLyric={setLyric}/>
      <Song 
        lyric={lyric}  
      />
    </Fragment>
  );
}

export default App;
