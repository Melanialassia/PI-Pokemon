//Style
import './App.css';
import { Routes, Route } from 'react-router-dom';
//Dependencies
import axios from 'axios';
// Component to render
import LandingPage from './components/landingPage/landingPage';
import Home from './components/Home/Home';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
