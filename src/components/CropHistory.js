import React, { useState } from 'react';

const CropHistory = () => {
  const [history, setHistory] = useState([
    { crop: "Wheat", disease: "Rust", treatment: "Copper Fungicide" },
    { crop: "Tomato", disease: "Blight", treatment: "Chlorothalonil" },
  ]);

  return (
    <div>
      <h2>Crop History</h2>
      <table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Disease</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.crop}</td>
              <td>{entry.disease}</td>
              <td>{entry.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropHistory;