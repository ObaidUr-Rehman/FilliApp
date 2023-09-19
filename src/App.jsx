import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import MenuPage from './components/MenuPage';
import Catering from './components/Catering';
import CareerPage from './components/CareerPage';
import Contact from './components/Contact';
import Blog from './components/Blog';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>






      <Navbar></Navbar>


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/CareerPage" element={<CareerPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>


    </>
  );
}

export default App;
