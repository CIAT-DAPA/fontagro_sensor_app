import './App.css';
import Header from './components/Header';
import LoadData from './components/InputsensorData';
import Footer from './components/Footer';
import LoadDatatwo from './components/Visualization';
import NavVisualiation from './components/NavVisualization';
import { useState } from 'react';


import { Route, Routes} from "react-router-dom"
function App() {
 
  
  return ( 
    <>
    <div className="App">
    <Routes >
    <Route path='/' element={<><Header /> <LoadData />  <Footer/></>}></Route>
    <Route path='/visualization' element={<><NavVisualiation /> <LoadDatatwo  /> <Footer /> </>}></Route>
    </Routes>
  </div></>
  );
}
export default App;
