import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component here
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PesticideSuggestions from './components/PesticideSuggestions';
import CropHistory from './components/CropHistory';
import DiseaseDiagnosis from './components/DiseaseDiagnosis';
import WeatherConditions from './components/WeatherConditions';
import Feedback from './components/Feedback';
import ContactUs from './components/ContactUs';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Navbar /> {/* Place Navbar component here */}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pesticide-suggestions" element={<PesticideSuggestions />} />
          <Route path="/crop-history" element={<CropHistory />} />
          <Route path="/disease-diagnosis" element={<DiseaseDiagnosis />} />
          <Route path="/weather-conditions" element={<WeatherConditions />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;