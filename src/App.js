import React from 'react';
import './App.css';
import Jobs from './Jobs';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router><Jobs /></Router>
  );
}

export default App;
