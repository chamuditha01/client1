import './App.css';
import Home from './Home';
import Construction from './categorypages/Contruction/Construction';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Engineeringproduct from './categorypages/EngineeringProduct/Engineeringproduct';
import HouseKeeping from './categorypages/HouseKeeping/HouseKeeping';
import Marine from './categorypages/Marine/Marine';
import SparePart from './categorypages/SpareParts/SparePart';
import Tools from './categorypages/Tools/Tools';
import Others from './categorypages/Others/Others';
import AboutUsPage from './AboutUsPage';
import Electrical from './categorypages/Electrical/Electrical';


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
          <Route path='/aboutus' element={<AboutUsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
