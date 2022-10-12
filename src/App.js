import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FirstPage from './firstPage/FirstPage';
import ScndPage from './scndPage/ScndPage';
import Confirm from './confirm/Confirm';
import Congrats from './congrats/Congrats';
import { useState } from 'react';
function App() {
  const [name , setName] = useState('')
  const [personalMail , setPersonalMail] = useState('')
  const [personalCountry , setPersonalCountry] = useState('')
  const [personalPhone , setPersonalPhone] = useState('')
  const [password , setPassword] = useState('')
  const [confrimPassword , setConfirmPassword] = useState('')
  const [companyName , setCompanyName] = useState('')
  const [address , setAdress] = useState('')
  const [businessmail , setBusinessMail] = useState('')
  const [companyCountry , setCompanyCountry] = useState('')
  const [city , setCity] = useState('city')
  const [comanyPhone1 , setCompanyPhone1] = useState('')
  const [comanyPhone2 , setCompanyPhone2] = useState('')
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<FirstPage name={name} setName={setName} personalMail={personalMail} setPersonalMail={setPersonalMail} personalCountry={personalCountry} setPersonalCountry={setPersonalCountry} personalPhone={personalPhone} setPersonalPhone={setPersonalPhone} password={password} confrimPassword={confrimPassword}  />} />
      <Route path="/scnd" element={ <ScndPage/>} />
      <Route path="/confirm" element={ <Confirm/>} />
      <Route path="/congrats" element={ <Congrats/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
