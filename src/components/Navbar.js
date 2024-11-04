import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/pesticide-suggestions">Pesticide Suggestions</Link></li>
        <li><Link to="/crop-history">Crop History</Link></li>
        <li><Link to="/disease-diagnosis">Disease Diagnosis</Link></li>
        <li><Link to="/weather-conditions">Weather Conditions</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;