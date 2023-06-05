import * as React from 'react'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function Paths() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
  );
}

export default Paths;
