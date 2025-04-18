import './App.css';
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CollectionPage from './Pages/CollectionPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FooterComponent from './components/FooterComponent';
import FirstProductPage from './Pages/FirstProductPage';
import SecondProductPage from './Pages/SecondProductPage';
import ThirdProductPage from './Pages/ThirdProductPage';
import FourthProductPage from './Pages/FourthProductPage';
import FifthProductPage from './Pages/FifthProductPage';
import SixthProductPage from './Pages/SixthProductPage';
import SeventhProductPage from './Pages/SeventhProductPage';
import EighthProductPage from './Pages/EighthProductPage';
import NinthProductPage from './Pages/NinthProductPage';
import TenthProductPage from './Pages/TenthProductPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
  <div className="App">
    <Router>
       <HeaderComponent />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/cartPage' element={<CartPage/>}/>
        <Route path='/kidSlimTrouser' element={<FirstProductPage/>}/>
        <Route path='/menCottonShirt' element={<SecondProductPage/>}/>
        <Route path='/boyCottonShirt' element={<ThirdProductPage/>}/>
        <Route path='/womenBlueJakcet' element={<FourthProductPage/>}/>
        <Route path='/menBlueTrousers' element={<FifthProductPage/>}/>
        <Route path='/girlCottonTop' element={<SixthProductPage/>}/>
        <Route path='/womenZipJakcet' element={<SeventhProductPage/>}/>
        <Route path='/womenGreenTrousers' element={<EighthProductPage/>}/>
        <Route path='/menPlainShirt' element={<NinthProductPage/>}/>
        <Route path='/womenFitJakcet' element={<TenthProductPage/>}/>
        </Routes>
      <FooterComponent />
    </Router>
  </div>
  );
}

export default App;
