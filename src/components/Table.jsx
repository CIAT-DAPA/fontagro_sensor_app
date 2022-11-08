import {React,useEffect} from "react";
import Table from 'react-bootstrap/Table';
function ShowTable(){
    const data = localStorage.getItem("datos");
    const datos = JSON.parse(data);
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
  const porcentajeFLoat= porcentaje.map(porcent=>parseFloat(porcent));
  const prom =porcent=> porcentajeFLoat.reduce((a, b) => a + b,0)/porcentajeFLoat.length;
  console.log(prom().toFixed(2))
  

  


    useEffect(() => {
        // 👇️ call method in useEffect hook
       /*  let el = document.getElementById('hi');

        let holad= document.createElement('thead');
        el.appendChild(holad)
        console.log(el); */
      }, []);
    
    
    return(
        <div className="table-responsive">
            <Table id="hi" striped  >
            <thead>
        <tr>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Promedio General</th>
          <th>Humedad Maxima</th>
          <th>Humead Minima</th>
          <th>Promedio General</th>
          <th>Promedio General</th>
          <th>Promedio General</th>
        </tr>
      </thead>
        
        <tbody>
          <tr>
            <td>{fechas[0]}</td>
            <td>{fechas.at(-1)}</td>
            <td>{prom().toFixed(2)}</td>
            <td>{Math.max(...porcentajeFLoat)}</td>
            <td>{Math.min(...porcentajeFLoat)}</td>
          </tr>
        </tbody>
      </Table>
        </div>
        
    )
   
   
}
export default ShowTable;