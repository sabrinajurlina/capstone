import logo from './logo.svg';
import './App.css';
import {useNavigate, Route, Routes} from 'react-router-dom';
import ThemeSwitch from './components/ThemeSwitch';
import ModelLoginView from './views/ModelLoginView';
import ClientLoginView from './views/ClientLoginView';
import React, {useContext} from 'react';
import {AppContext} from './context/AppContext';
import Box from '@mui/material/Box';
import LandingPage from './views/LandingPage';
import ModelHomeView from './views/ModelHomeView';
import ModelRegisterView from './views/ModelRegisterView';
import StatementTable from './components/schedule/Statement';
import EditProfileView from './views/EditProfileView';
import ClientRegisterView from './views/ClientRegisterView';
import ClientHomeView from './views/ClientHomeView';

function App() {
  const navigate = useNavigate();
  const {user} = useContext(AppContext)
  return (
    <>
      <Box sx={{minheight:'90vh'}}>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/modelLogin" element={<ModelLoginView/>}/>
          <Route path="/modelHome" element={<ModelHomeView/>}/>
          <Route path="/modelRegister" element={<ModelRegisterView/>}/>
          <Route path="/modelStatement"element={<StatementTable/>}/>
          <Route path="/editProfile"element={<EditProfileView/>}/>
          <Route path="/clientLogin" element={<ClientLoginView/>}/>
          <Route path="/clientRegister" element={<ClientRegisterView/>}/>
          <Route path="/clientHome" element={<ClientHomeView/>}/>
        </Routes>
        
      </Box>
    </>
  );
}

export default App;
