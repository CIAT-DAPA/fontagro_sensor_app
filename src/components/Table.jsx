import {React,useEffect,useContext} from "react";
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

    const data = localStorage.getItem("datos");
    const datos = JSON.parse(data);
  datos.data.shift();

    const fechas = [];
  const porcentaje = [];
  const getData = () => {
    for (let i = 0; i < datos.data.length; i++) {
      fechas.push(datos.data[i].Fecha);
      porcentaje.push(datos.data[i].SW10);
    }
  };
  getData();
  porcentaje.shift();
  fechas.shift();
  const groups = datos.data.reduce((groups, game) => {
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
  
    useEffect(() => {
       const crearTabla=()=>{
        var table = document.getElementById('my-table');
        for (let i=0; i<x.length;i++){
            var row= `<tr>
                        <td>${x[i].x}</td>
                        <td>${x[i].y[0]}</td>
                        <td>${x[i].y[4]}</td>
                        <td>${x[i].y[2]}</td>
                        
                    </tr>`
            table.innerHTML+=row;
            
        }
       }
       crearTabla();
      }, []);
    
    
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
        
        <tbody id="my-table">
          
        </tbody>
      </Table>
        </div>
        
    )
   
   
}
export default ShowTable;