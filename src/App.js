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
import Others from './categorypages/Others';


function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/page1' element={<Electrical/>}/>
          <Route path='/page2' element={<Construction/>}/>
          <Route path='/page3' element={<SparePart/>}/>
          <Route path='/page4' element={<Engineeringproduct/>}/>
          <Route path='/page5' element={<HouseKeeping/>}/>
          <Route path='/page6' element={<Marine/>}/>
          <Route path='/page7' element={<Tools/>}/>
          <Route path='/page8' element={<Others/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
