import React, { useState } from 'react';

const DiseaseDiagnosis = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const diagnoseDisease = () => {
    if (symptoms.toLowerCase().includes("yellow leaves")) {
      setDiagnosis("Possible Rust");
    } else if (symptoms.toLowerCase().includes("white spots")) {
      setDiagnosis("Possible Powdery Mildew");
    } else {
      setDiagnosis("Unknown disease, please consult an expert.");
    }
  };

  return (
    <div>
      <h2>Disease Diagnosis</h2>
      <textarea
        placeholder="Describe the symptoms"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button onClick={diagnoseDisease}>Diagnose</button>

      {diagnosis && <p>Diagnosis: {diagnosis}</p>}
    </div>
  );
};

export default DiseaseDiagnosis;