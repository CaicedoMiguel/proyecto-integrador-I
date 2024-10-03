// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Sitemap from './pages/sitemap/Sitemap';
import Home from './pages/home/Home';

const App = () => {

  return (
    <>
    <div>
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/sitemap' element={<Sitemap />}/>      
      </Routes>
    </div>
    </>
    
  );
}

export default App;
