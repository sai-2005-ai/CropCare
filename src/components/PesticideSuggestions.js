import React, { useState } from 'react';

const PesticideSuggestions = () => {
  const [disease, setDisease] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleDiseaseChange = (e) => {
    setDisease(e.target.value);
  };

  const fetchSuggestions = () => {
    const pesticideData = {
      "Powdery Mildew": ["Sulfur", "Potassium Bicarbonate"],
      "Rust": ["Copper Fungicide", "Sulfur"],
      "Blight": ["Chlorothalonil", "Mancozeb"],
    };

    setSuggestions(pesticideData[disease] || []);
  };

  return (
    <div>
      <h2>Pesticide Suggestions</h2>
      <select value={disease} onChange={handleDiseaseChange}>
        <option value="">Select Disease</option>
        <option value="Powdery Mildew">Powdery Mildew</option>
        <option value="Rust">Rust</option>
        <option value="Blight">Blight</option>
      </select>
      <button onClick={fetchSuggestions}>Get Suggestions</button>

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((pesticide, index) => (
            <li key={index}>{pesticide}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PesticideSuggestions;