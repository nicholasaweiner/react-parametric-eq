import React, { useState } from 'react';
import ParametricEQ from './ParametricEQ';
import AudioUpload from './AudioUpload';

function App() {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <div>
      <AudioUpload setAudioFile={setAudioFile} />
      {audioFile && <ParametricEQ audioFile={audioFile} />}
    </div>
  );
}

export default App;