import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import AllQuotes from './pages/AllQuotes';
import TopNavbar from './components/TopNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="w-screen h-screen">
      <TopNavbar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />Register
        <Route path="/register" element={<Register/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/contact-us" element={<Contacts/>} />
        <Route path="/quotes" element={<AllQuotes/>} />
      </Routes>
      <ToastContainer >
      </ToastContainer>
     
    </div>
  );
}

export default App;
