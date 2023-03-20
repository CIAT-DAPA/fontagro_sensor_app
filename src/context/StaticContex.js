import React,{useState,createContext} from "react";
export const DataContext = createContext();
export function DataContextProvider(props){
    const [contextDatao, setContexDatao]= useState('');
    const [nombreP, setNombreP]= useState('');
    const [nombreC, setNombreC]= useState('');
    const [inicio, setInicio]= useState('');
    const [fin, setFin]= useState('');
    const [finca, setFinca]= useState('');
    const [json, setJson]= useState('');
    return(
        <DataContext.Provider value={{contextDatao,setContexDatao, nombreP,setNombreP,nombreC,setNombreC,finca,setFinca,inicio,setInicio,fin,setFin,json,setJson}} >
            {props.children}
            </DataContext.Provider>
    )
}
