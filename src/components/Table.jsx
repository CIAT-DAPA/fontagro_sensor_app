import {React,useEffect,useContext,useState} from "react";
import Table from 'react-bootstrap/Table';
import '../assets/styles/table.css'
import { DataContext } from "../context/StaticContex";

const min= datos=> Math.min(...datos)
const max= datos=> Math.max(...datos)
const arrayAsc= datos=>  datos.sort((a,b)=>a-b);
const quantilel = (datos, q) => {
  const sorted = arrayAsc(datos);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25l = datos => quantilel(datos, .25);


const q50l = datos => quantilel(datos, .50);

const q75l = datos => quantilel(datos, .75);

const medianl = datos => q50l(datos);

const getValores=(datos)=>{
  let valores=[]
  for(let i=0; i<datos.length;i++){
    valores.push(parseFloat(datos[i].SW10))
  }
  return valores

}

function ShowTable(props){
const { json } = useContext(DataContext);
const { inicio } = useContext(DataContext);
  const { fin } = useContext(DataContext);


    const data = localStorage.getItem("datos");
    const datos = JSON.parse(data);
    let ini= new Date(inicio)
  let fi= new Date(fin)
  const hasfilter= (inicio && fin) ;
  const filterP= hasfilter ?  datos.data.filter(dato=>new Date(dato.Fecha) > ini && new Date(dato.Fecha) <=fi) : datos.data
  const fechas = filterP.map(dato=>dato.Fecha);
  const porcentaje = filterP.map(dato=>parseFloat(dato.SW10));
  datos.data.shift();
  

  


  
  const groups = filterP.reduce((groups, game) => {
    const date = game.Fecha.split(' ')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});
  const x= Object.entries(groups).map(([index,group])=>{
    const valores=getValores(group);
    const minv= min(valores).toFixed(2)
    const maxv= max(valores).toFixed(2)
    const media= medianl(valores).toFixed(2)
    const q25= q25l(valores).toFixed(2)
    const q50= q50l(valores).toFixed(2)
    const q75= q75l(valores).toFixed(2)
    return {
      x:index,
      y:[minv,q25,media,q75,maxv]
    }
  })

  const porcentajeFLoat= porcentaje.map(porcent=>parseFloat(porcent));
  const prom =porcent=> porcentajeFLoat.reduce((a, b) => a + b,0)/porcentajeFLoat.length;
 
  
  
  

    
      
      console.log(x[0])
      console.log(x.at(-1))
      


    return(
        <div className="table-responsive">
            <Table id="hi" striped  >
            <thead>
        <tr>
          <th>Fechas</th>
          <th>Mínimo</th>
          <th>Máximo</th>
          <th>Promedio</th>
        </tr>
       
      </thead>
        
        <tbody id="my-table"  >
         {
          x.map((dat)=>{
            return <tr>
            <td>{dat.x}</td>
            <td>{dat.y[0]}</td>
            <td>{dat.y[4]}</td>
            <td>{dat.y[2]}</td> 
        </tr>
          })
         }
        </tbody>
      </Table>
        </div>
        
    )
   
   
}
export default ShowTable;