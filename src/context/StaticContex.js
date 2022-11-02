import React,{useState,createContext} from "react";
export const DataContext = createContext();
export function DataContextProvider(props){
    const [contextDatao, setContexDatao]= useState('');
    const [nombreP, setNombreP]= useState('');
    const [inicio, setInicio]= useState('');
    const [fin, setFin]= useState('');
    const [finca, setFinca]= useState('');
    return(
        <DataContext.Provider value={{contextDatao,setContexDatao, nombreP,setNombreP,finca,setFinca,inicio,setInicio,fin,setFin}} >
            {props.children}
            </DataContext.Provider>
    )
}
