import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Business from './components/Business';
import Footer from './components/Footer';
import Health from './components/Health';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Science from './components/Science';
import Sports from './components/Sports';
import Technology from './components/Technology';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/sport" element={<Sports />} />
          <Route path="/science" element={<Science />} />
          <Route path="/health" element={<Health />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
