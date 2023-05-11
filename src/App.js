import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home';
import Test from './Pages/test';
import PagesError from './Pages/Error';
import Legendaries from './Pages/Legendaries';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='app'>
        <Navbar/>

        <div className='global'>
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Test' element={<Test/>}/>
            <Route path='/Legendaries' element={<Legendaries/>}/>
            <Route path='/Error' element={<PagesError/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
