import logo from './logo.svg';
import './App.css';
import {useNavigate, Route, Routes} from 'react-router-dom';
import ThemeSwitch from './components/ThemeSwitch';
import NavBar from './components/NavBar';
import ModelLoginView from './views/ModelLoginView';
import React, {useContext} from 'react';
import {AppContext} from './context/AppContext';
import Box from '@mui/material/Box';
import LandingPage from './views/LandingPage';
import ModelHomeView from './views/ModelHomeView';
import ModelRegisterView from './views/ModelRegisterView';
import StatementTable from './components/schedule/Statement';

function App() {
  const navigate = useNavigate();
  const {user} = useContext(AppContext)
  return (
    <>
    {/* <NavBar> */}
      <Box sx={{minheight:'90vh'}}>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/modelLogin" element={<ModelLoginView/>}/>
          <Route path="/modelHome" element={<ModelHomeView/>}/>
          <Route path="/modelRegister" element={<ModelRegisterView/>}/>
          <Route path="/modelStatement"element={<StatementTable/>}/>
          {/*
          <Route path="/clientRegister" element={<ClientRegisterView/>}/>
          
          
          <Route path="/clientLogin" element={<ClientLoginView/>}/>
          */}
        </Routes>
        
      </Box>
    {/* </NavBar> */}
    </>
  );
}

export default App;
