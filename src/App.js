import './App.css';
import Header from './components/Header';
import LoadData from './components/InputsensorData';
import Footer from './components/Footer';
import LoadDatatwo from './components/Visualization';
import NavVisualiation from './components/NavVisualization';
import { useState } from 'react';
import DownloadPdf from './components/Donwload';
import   {DataContextProvider}  from './context/StaticContex'
import { Route, Routes} from "react-router-dom"
function App() {
 
  return ( 
    <>
    
    <DataContextProvider >
    <div className="App " id='pagetodownload'>
    
    <Routes >
      <Route path='/' element={<><Header /> <LoadData />  <Footer/></>}></Route>
      <Route path='/visualization' element={<><NavVisualiation /> <LoadDatatwo  /> <Footer /> {/* <DownloadPdf rootElementId={'pagetodownload'} DownloadFileName='testPage' /> */}</>}></Route>
    </Routes>
  </div>
  
  </DataContextProvider>
  </>
  
  );
}
export default App;
