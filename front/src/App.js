import logo from './logo.svg';
import './App.css';
import './views/home/home.js';
import Home from './views/home/home.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
