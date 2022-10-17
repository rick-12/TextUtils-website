// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
// import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(false);
  document.body.style = mode ? 'background: #15337a' : 'background: white';

  return (
    <>
      <Router>
        <div className={mode ? 'dark' : ''}>
          <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm />} />
          </Routes>
          {/* <Alert /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
