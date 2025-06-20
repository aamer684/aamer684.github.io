import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Angular from './pages/technologies/AngularPage';
import SqlServer from './pages/technologies/SqlServerPage';
// import other technology pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies/angular" element={<Angular />} />
        <Route path="/technologies/sqlserver" element={<SqlServer />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
