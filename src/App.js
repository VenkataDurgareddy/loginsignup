import logo from './logo.svg';
import './App.css';
import CompA from './components/compA';
import ComB from './components/comB';
import ComC from './components/comC';
import Classcomp1 from './components/classcomp1';
import Image from './components/image';
import Compex from './components/compex';
import Menu from './components/menu';
import Persondetails from './components/persondetails';
import Practice from './components/practice';
import Event from './components/event';
import ImageEvent from './components/imageevent';
import Hooks from './components/hooks';
import forms from './components/forms';
//For importing react router dom(installing command is: (npm i react-router-dom))
import { BrowserRouter, Routes, Route, Form ,redirect} from 'react-router-dom';
import Forms from './components/forms';
import Usercomp from './components/usercomp';
import Studentdata from './components/studentdata';
import Editform from './components/editform';
import Userpass from './components/userpass';
import LoginSignup from './components/signup';
import Login from './components/login';
import Myprofile from './components/myprofile';
import Nav from './components/nav';

//For using the createcontext
import React, { useState, createContext } from 'react';

export const store = createContext();

function App() {

  //For accessing the token

  const [token, settoken] = useState(null)

  return (
    <div className="App">
      {/* calling functional components */}
      {/* <CompA/>
      <ComB/>
      <ComC/>
      <Classcomp1/>
      <Image/> */}
      <store.Provider value={[token,settoken]}>
        <BrowserRouter>
          {/* <Menu/> */}
          <Routes>
            {/* This Route path is used to access componenets by using uRls for accessing particular pages or components */}
            <Route path='/CompA' element={<CompA />} />
            <Route path='/CompB' element={<ComB />} />
            <Route path='/ComC' element={<ComC />} />
            <Route path='/Classcomp1' element={<Classcomp1 />} />
            <Route path='/Image' element={<Image />} />
            <Route path='/Compex' element={<Compex />} />
            <Route path='/Persondetails' element={<Persondetails />} />
            <Route path='/Practice' element={<Practice />} />
            <Route path='/Event' element={<Event />} />
            <Route path='/ImageEvent' element={<ImageEvent />} />
            <Route path='/Hooks' element={<Hooks />} />
            <Route path='/Forms' element={<Forms />} />
            <Route path='/Usercomp' element={<Usercomp />} />
            <Route path='/Studentdata' element={<Studentdata />} />
            <Route path='/Editform/:id' element={<Editform />} />
            <Route path='/Submitform' element={<Userpass />} />
            <Route path='/' element={<Nav/>}/>
            <Route path='/LoginSignup' element={<LoginSignup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Myprofile' element={<Myprofile />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>

    </div>
  );
}

export default App;
