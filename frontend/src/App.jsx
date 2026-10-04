import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Auth from './Components/Auth';
import Profile from './Components/Profile';
import СreateApplication from './Components/СreateApplication';
import { Applications } from './Components/Applications';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    // <Router>
      <main className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>ДЭМО. Конференции.РФ</h1>
      

        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/home' element = {<Profile />} />
          <Route path='/admin' element = {<Applications />} />
          <Route path='/addApplication' element = {<СreateApplication />} />
        </Routes>
      </main>
  );
}

export default App;