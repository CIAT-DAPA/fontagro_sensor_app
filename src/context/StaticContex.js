import React,{useState,createContext} from "react";
export const DataContext = createContext();
export function DataContextProvider(props){
    const [contextData, setContexData]= useState('');
    const valor= {contextData,setContexData};

    const [nombre, setNombre]= useState('');
    const valorNombre= {nombre, setNombre};
   /*  const [campo,setCampo]= useState(25)
    const value= {campo, setCampo}; */
    return(
        <DataContext.Provider value={valor} >
            {props.children}
            </DataContext.Provider>
    )
}
