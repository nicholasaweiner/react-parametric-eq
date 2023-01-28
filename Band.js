import React, { useState } from 'react';

function Band({ bandIndex, band, onChange }) {
  const [gain, setGain] = useState(band.gain);
  const [frequency, setFrequency] = useState(band.frequency);
  const [q, setQ] = useState(band.q);

  const handleGainChange = (e) => {
    setGain(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleQChange = (e) => {
    setQ(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(bandIndex, { gain, frequency, q });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gain
        <input
          type="number"
          value={gain}
          onChange={handleGainChange}
        />
      </label>
      <label>
        Frequency
        <input
          type="number"
          value={frequency}
          onChange={handleFrequencyChange}
        />
      </label>
      <label>
        Q
        <input type="number" value={q} onChange={handleQChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Band;