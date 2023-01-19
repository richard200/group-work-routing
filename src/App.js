import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';


function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Contact/>
          
        </Routes>

      
    </BrowserRouter>
  );
}

export default App;
