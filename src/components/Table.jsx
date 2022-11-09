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
          <th>Fechas</th>
          <th>Porcentaje de Humedad</th>
          
        </tr>
      </thead>
        
        <tbody>
          <tr>
            <td>{fechas[0]}</td>
            <td>{fechas.at(-1)}</td>
          </tr>
        </tbody>
      </Table>
        </div>
        
    )
   
   
}
export default ShowTable;