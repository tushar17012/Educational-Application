import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Educationalwebapp from './Mainweb/Educationalwebapp';
import Spelling from './mainActivities/Spelling';
import Comprehension from './mainActivities/Activitysecond/Comprehension';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Home from './Mainweb/Home';
import About from './Mainweb/About';
import Contact from './Mainweb/Contact';
import Service from './Mainweb/Service';
import Navbarweb from "./Mainweb/Navbarweb"
import Login from "./Loginmodal/Login";
import DragandDropActivity from './mainActivities/DragandDrop/DragandDropActivity';



function App() {
  return (
    <>  
   
  <Router>
    <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/home' element={<Educationalwebapp/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='/spelling' element={<Spelling/>}/>
       <Route path='/Comprehension' element={<Comprehension/>}/>
       <Route path='/draganddrop' element={<DragandDropActivity/>}/>
    </Routes>

 </Router>

    </> 
  
  );
}

export default App;
