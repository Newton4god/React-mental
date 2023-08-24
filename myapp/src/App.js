import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Price from './component/Price';
import About from './component/About';
import Home from './component/Home';
import Service from './component/Service';
import Navbar from './Navbar';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
           <Route  path="/" element={<Home/>} />
            <Route  path="/about" element={<About/>} />
            <Route path="/price" element={<Price/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/contact" element={<Contact/>} />
         

        </Routes>
     
        <Footer/>
      
      </Router>
   <div>
   
   </div>
   </>
  );
}

export default App;
