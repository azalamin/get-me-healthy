import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div className='app'>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/home' element={<Home />} />
       <Route path='/services' element={<Services />} />
       <Route path='/about' element={<About />} />
       <Route path='/checkout' element={<Checkout />} />
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
