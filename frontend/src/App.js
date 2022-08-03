import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddVehicle from './components/AddVehicle';
import ViewVehicles from './components/ViewVehicles';
import UpdateVehicle from './components/UpdateVehicle';

export default function App() {
  return(
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/add/vehicle" element={ <AddVehicle/>}/> 
     <Route path="/view/vehicles" element={ <ViewVehicles/>}/>
     <Route path="/update/vehicle/:id" element={ <UpdateVehicle/>}/>       
       
       </Routes>
       </BrowserRouter>
   </div>
   );
}
