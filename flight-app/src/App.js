import logo from './logo.svg';
import './App.css'
import Example from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import back from './images/Back.jpg'
import Login from './components/Login';
import Searchflight from './components/Searchflight';
import FlightList from './components/Flightlist';
import Seatbooking from './components/Seatbooking';
import { ToastContainer, toast } from 'react-toastify';
import Reservation from './components/Reservation';
import Reservefare from './components/Reservefare';
import Reserveflight from './components/Reserveflight';
import BillingSection from './components/Billing';
import UserDetails from './components/UserDetails';
import Displayuser from './components/Displayuser';
import {store} from './redux/store/index'
import { Provider } from 'react-redux';
import About from './components/About';
import LandingPage from './components/LandingPage';
// About
// import UserDetail from '../src/components/UserDetails'
function App() {
  return (
    <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    <Provider store={store}>
      <Router>
     <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Searchflight/>}/>
      <Route path="/search/flightlist" element={<FlightList/>}/>
      <Route path="/flightlist/seats" element={<Seatbooking/>}/>
      <Route path="/seats" element={<Seatbooking/>}/>
      <Route path="/mybooking" element={<Reservation/>}/>
      <Route path="/" element={<Reservation/>}/>
      <Route path="/reservation/reservefare" element={<Reservefare/>}/>
      <Route path="/seats/reservefare" element={<Reservefare/>}/>
      <Route path="/reservefare/billing" element={<BillingSection/>}/>
      <Route path="/billing" element={<BillingSection/>}/>
      <Route path="/search/resflightlist" element={<Reserveflight/>}/>
      {/* <Route path="/userdetail" element={<UserDetail/>}/> */}
      <Route path="/profile/:email" element={<UserDetails/>}/>
      <Route path="/flightdet" element={<Displayuser/>}/>
      <Route path="/landing" element={<LandingPage/>}/>
    </Routes>
   </Router>
  </Provider>
   
    </div>
  );
}

export default App;
