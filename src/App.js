import './App.css';
import Home from './Home';
import Construction from './categorypages/Construction';
import Electrical from './categorypages/Electrical';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Engineeringproduct from './categorypages/Engineeringproduct';
import HouseKeeping from './categorypages/HouseKeeping';
import Marine from './categorypages/Marine';
import SparePart from './categorypages/SparePart';
import Tools from './categorypages/Tools';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Electrical" element={<Electrical />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Engineeringproduct" element={<Engineeringproduct />} />
          <Route path="/HouseKeeping" element={<HouseKeeping />} />
          <Route path="/Marine" element={<Marine />} />
          <Route path="/SparePart" element={<SparePart />} />
          <Route path="/Tools" element={<Tools />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
