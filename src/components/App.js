import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Books from './Books';
import Categories from './Categories';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
