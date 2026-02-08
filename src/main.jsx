import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Explore from './pages/Explore/Explore.jsx';
import Mysuru from './pages/Places/Mysuru.jsx';
import Ajantacanvas from './pages/Places/Ajantacanvas.jsx';
import Ooty from './pages/Places/Ooty.jsx';
import Darjeeling from './pages/Places/Darjeeling.jsx';
import Gokarna from './pages/Places/Gokarna.jsx';
import Marina from './pages/Places/Marina.jsx';
import Varanasi from './pages/Places/Varanasi.jsx';
import Tirupathi from './pages/Places/Tirupathi.jsx';
import Delhi from './pages/Places/Delhi.jsx';
import Bangalore from './pages/Places/Bangalore.jsx';
import Periyar from './pages/Places/Periyar.jsx';
import Sundarbans from './pages/Places/Sundarbans.jsx';
import Flights from './components/Flights/Flights.jsx';
import BookTicket from './pages/BookTicket/BookTicket.jsx';
import FlightRoutes from './pages/FlightRoutes/FlightRoutes.jsx';
import Status from './pages/Status/Status.jsx';
import Booking from './components/Booking/Booking.jsx';
import Bangkok from './pages/Locations/Bangkok.jsx'
import Kochi from './pages/Locations/Kochi.jsx'
import Kolkata from './pages/Locations/Kolkata.jsx'
import Login from './pages/Login.jsx';
import Passenger from './pages/Passenger/Passenger.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='' element={<Home />} /> 
      <Route path='Bangkok' element={<Bangkok />} />
      <Route path='Kochi' element={<Kochi />} />
      <Route path='Kolkata' element={<Kolkata />} />

      <Route path='Explore' element={<Explore />} />
        <Route path='Mysuru' element={<Mysuru />} />
        <Route path='Ajantacanvas' element={<Ajantacanvas />} />
        <Route path='Ooty' element={<Ooty />} />
        <Route path='Darjeeling' element={<Darjeeling />} />
        <Route path='Gokarna' element={<Gokarna />} />
        <Route path='Marina' element={<Marina />} />
        <Route path='Varanasi' element={<Varanasi />} />
        <Route path='Tirupathi' element={<Tirupathi />} />
        <Route path='Delhi' element={<Delhi />} />
        <Route path='Bangalore' element={<Bangalore />} />
        <Route path='Periyar' element={<Periyar />} />
        <Route path='Sundarbans' element={<Sundarbans />} />  
               
      <Route path='Flights' element={<Flights />} />
      <Route path='BookTicket' element={<BookTicket />} />
      <Route path='FlightRoutes' element={<FlightRoutes />} />
      <Route path='Status' element={<Status />}/>

    <Route path='Booking' element={<Booking />} />
    <Route path='Passenger' element={<Passenger />} />
      <Route path='Login' element={<Login />} />

    </Route>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
 