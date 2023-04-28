import './App.css';
import React from 'react';
import {Route,Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import AdminHome from './pages/AdminHome';
import Map from './pages/GoogleMap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/booking/:carid" element={<BookingCar/>}></Route>
          <Route path="/userbookings" element={<UserBookings/>}></Route>
          <Route path="/addcar" element={<AddCar/>}></Route>
          <Route path="/editcar/:carid" element={<EditCar/>}></Route>
          <Route path="/admin" element={<AdminHome/>}></Route>
          <Route path="/googlemap" element={<Map/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;

export function ProtectedRoute(props)
{
    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Navigate to='/login'/>
    }

}
