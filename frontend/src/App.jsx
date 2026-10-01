import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Auth from './Components/Auth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {SingUpForm} from "./Components/TestReg"
import { useState } from 'react';
import Profile from './Components/Profile';

function App() {

  return (
    // <Router>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>ДЭМО. Конференции.РФ</h1>

        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/home' element = {<Profile />} />
        </Routes>
      </div>
  );
}

export default App;