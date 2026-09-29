import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Auth from './Components/Auth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {SingUpForm} from "./Components/TestReg"
import { useState } from 'react';
import Profile from './Components/Profile';

function App() {
    const [users, setUsers] = useState(
    [
      { login: 'demo', password: '123' },
      { login: 'web', password: '111' }]
  )

  return (
    // <Router>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>ДЭМО. ПОРТАЛ "Корочки.есть"</h1>

        <Routes>
          <Route path="/" element={<Registration users = {users} setUsers = {setUsers}/>} />
          <Route path="/auth" element={<Auth users = {users} setUsers = {setUsers} />} />
          <Route path='/home' element = {<Profile />} />
        </Routes>
      </div>
  );
}

export default App;