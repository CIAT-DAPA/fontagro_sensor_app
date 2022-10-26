import React,{useState,createContext} from "react";
export const DataContext = createContext();
export function DataContextProvider(props){
    const [contextDatao, setContexDatao]= useState('');
    const valor= {contextDatao,setContexDatao};

    const [nombreP, setNombreP]= useState('');
    const valorNombre= {nombreP, setNombreP};

    const [finca, setFinca]= useState('');
    const valorFinca= {finca, setFinca};


   /*  const [campo,setCampo]= useState(25)
    const value= {campo, setCampo}; */
    return(
        <DataContext.Provider value={{contextDatao,setContexDatao, nombreP,setNombreP,finca,setFinca}} >
            {props.children}
            </DataContext.Provider>
    )
}
