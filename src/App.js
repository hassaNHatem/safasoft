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
  const [city , setCity] = useState('')
  const [comanyPhone1 , setCompanyPhone1] = useState('')
  const [comanyPhone2 , setCompanyPhone2] = useState('')
  const [password1Visable , setpassword1visable] = useState(false)
  const [password2Visable , setpassword2visable] = useState(false)

  const COUNTRIES = [ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "land Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"}, 
    {"name": "American Samoa", "code": "AS"}, 
    {"name": "AndorrA", "code": "AD"}, 
    {"name": "Angola", "code": "AO"}, 
    {"name": "Anguilla", "code": "AI"}, 
    {"name": "Antarctica", "code": "AQ"}, 
    {"name": "Antigua and Barbuda", "code": "AG"}, 
    {"name": "Argentina", "code": "AR"}, 
    {"name": "Armenia", "code": "AM"}, 
    {"name": "Aruba", "code": "AW"}, 
    {"name": "Australia", "code": "AU"}, 
    {"name": "Austria", "code": "AT"}, 
    {"name": "Azerbaijan", "code": "AZ"}, 
    {"name": "Bahamas", "code": "BS"}, 
    {"name": "Bahrain", "code": "BH"}, 
    {"name": "Bangladesh", "code": "BD"}, 
    {"name": "Barbados", "code": "BB"}, 
    {"name": "Belarus", "code": "BY"}, 
    {"name": "Belgium", "code": "BE"}, 
    {"name": "Belize", "code": "BZ"}, 
    {"name": "Benin", "code": "BJ"}, 
    {"name": "Bermuda", "code": "BM"}, 
    {"name": "Bhutan", "code": "BT"}, 
    {"name": "Bolivia", "code": "BO"}, 
    {"name": "Bosnia and Herzegovina", "code": "BA"}, 
    {"name": "Botswana", "code": "BW"}, 
    {"name": "Bouvet Island", "code": "BV"}, 
    {"name": "Brazil", "code": "BR"}, 
    {"name": "British Indian Ocean Territory", "code": "IO"}, 
    {"name": "Brunei Darussalam", "code": "BN"}, 
    {"name": "Bulgaria", "code": "BG"}, 
    {"name": "Burkina Faso", "code": "BF"}, 
    {"name": "Burundi", "code": "BI"}, 
    {"name": "Cambodia", "code": "KH"}, 
    {"name": "Cameroon", "code": "CM"}, 
    {"name": "Canada", "code": "CA"}, 
    {"name": "Cape Verde", "code": "CV"}, 
    {"name": "Cayman Islands", "code": "KY"}, 
    {"name": "Central African Republic", "code": "CF"}, 
    {"name": "Chad", "code": "TD"}, 
    {"name": "Chile", "code": "CL"}, 
    {"name": "China", "code": "CN"}, 
    {"name": "Christmas Island", "code": "CX"}, 
    {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
    {"name": "Colombia", "code": "CO"}, 
    {"name": "Comoros", "code": "KM"}, 
    {"name": "Congo", "code": "CG"}, 
    {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
    {"name": "Cook Islands", "code": "CK"}, 
    {"name": "Costa Rica", "code": "CR"}, 
    {"name": "Cote DIvoire", "code": "CI"}, 
    {"name": "Croatia", "code": "HR"}, 
    {"name": "Cuba", "code": "CU"}, 
    {"name": "Cyprus", "code": "CY"}, 
    {"name": "Czech Republic", "code": "CZ"}, 
    {"name": "Denmark", "code": "DK"}, 
    {"name": "Djibouti", "code": "DJ"}, 
    {"name": "Dominica", "code": "DM"}, 
    {"name": "Dominican Republic", "code": "DO"}, 
    {"name": "Ecuador", "code": "EC"}, 
    {"name": "Egypt", "code": "EG"}, 
    {"name": "El Salvador", "code": "SV"}, 
    {"name": "Equatorial Guinea", "code": "GQ"}, 
    {"name": "Eritrea", "code": "ER"}, 
    {"name": "Estonia", "code": "EE"}, 
    {"name": "Ethiopia", "code": "ET"}]
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<FirstPage name={name} setName={setName} personalMail={personalMail} setPersonalMail={setPersonalMail} personalCountry={personalCountry} setPersonalCountry={setPersonalCountry} personalPhone={personalPhone} setPersonalPhone={setPersonalPhone} password={password} setPassword={setPassword} confrimPassword={confrimPassword} setConfirmPassword={setConfirmPassword} COUNTRIES={COUNTRIES} password1Visable={password1Visable} setpassword1visable={setpassword1visable} password2Visable={password2Visable} setpassword2visable={setpassword2visable} />} />
      <Route path="/scnd" element={ <ScndPage  companyName={companyName} setCompanyName={setCompanyName} address={address} setAdress={setAdress} businessmail={businessmail} setBusinessMail={setBusinessMail} companyCountry={companyCountry}  setCompanyCountry={setCompanyCountry} city={city} setCity={setCity} comanyPhone1={comanyPhone1} setCompanyPhone1={setCompanyPhone1} comanyPhone2={comanyPhone2} setCompanyPhone2={setCompanyPhone2} COUNTRIES={COUNTRIES}/>}  />
      <Route path="/confirm" element={ <Confirm personalMail={personalMail}/>} />
      <Route path="/congrats" element={ <Congrats/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
