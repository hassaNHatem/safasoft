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
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<FirstPage/>} />
      <Route path="/scnd" element={ <ScndPage/>} />
      <Route path="/confirm" element={ <Confirm/>} />
      <Route path="/congrats" element={ <Congrats/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
