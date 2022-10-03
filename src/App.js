import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import PersonalData from './components/InputUserData';
import LoadData from './components/InputsensorData';
import LoadDatatwo from './components/Visualization';
/* import ShowPlots from './components/Visualization'; */

import { Route, Routes} from "react-router-dom"
function App() {
  return ( 
    <div className="App">
      {/* <ShowPlots /> */}
      
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/data' element={<><Header /> <LoadData /> </>}></Route>
      <Route path='/personaldata' element={<><Header /> <PersonalData /></>}></Route>
      <Route path='/visualization' element={<><Header /> <LoadDatatwo /></>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;
