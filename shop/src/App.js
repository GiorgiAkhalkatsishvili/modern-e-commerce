import './App.css';
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CollectionPage from './Pages/CollectionPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FooterComponent from './components/FooterComponent';

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
        </Routes>
         <FooterComponent />
    </Router>
  </div>
  );
}

export default App;
