import './App.css';
import Header from './components/Header';
import LoadData from './components/InputsensorData';
import Footer from './components/Footer';
import LoadDatatwo from './components/Visualization';
import NavVisualiation from './components/NavVisualization';
import { useState } from 'react';
import ModalCampo from './components/ModalCampo';
import   {DataContextProvider}  from './context/StaticContex'
import { Route, Routes} from "react-router-dom"
function App() {
 
 const state = {
    campo: "",
   }

const handleCallback = (childData) =>{
    this.setCampo({campo: childData})
}
const hola= 'campo'
const {name}= state;
console.log(name)
  
  return ( 
    <>
    <DataContextProvider >
    <div className="App">
    <ModalCampo parentcallback={handleCallback} hola={hola} />
    <Routes >
      <Route path='/' element={<><Header /> <LoadData />  <Footer/></>}></Route>
      <Route path='/visualization' element={<><NavVisualiation /> <LoadDatatwo hola={hola} /> <Footer /> </>}></Route>
    </Routes>
  </div>
  </DataContextProvider>
  </>
  
  );
}
export default App;
