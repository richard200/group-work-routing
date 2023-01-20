import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';


function App() {
  return (

    <BrowserRouter>
    <Home/>
    
        <Routes>
          <Route path='/' element={<Contact/>}></Route>
          <Route Path='/about' element={<About/>}></Route>
          
        </Routes>

      
    </BrowserRouter>
  );
}

export default App;
