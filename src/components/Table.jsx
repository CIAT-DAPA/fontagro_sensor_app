import {React,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import '../assets/styles/table.css'
function ShowTable(props){
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
  console.log(props.dias)
  const porcentajeFLoat= porcentaje.map(porcent=>parseFloat(porcent));
  const prom =porcent=> porcentajeFLoat.reduce((a, b) => a + b,0)/porcentajeFLoat.length;
  
    useEffect(() => {
       /* const crearTabla=()=>{
        var table = document.getElementById('my-table');
        for (let i=0; i<34;i++){
            var row= `<tr>
                        <td>${fechas[i]}</td>
                        <td>${porcentaje[i]}</td>
                        
                    </tr>`
            table.innerHTML+=row;
        }
       }
       crearTabla(); */
      }, []);
    
    
    return(
        <div className="table-responsive">
            <Table id="hi" striped  >
            <thead>
        <tr>
          <th>Periodo</th>
          <th>Mínimo</th>
          <th>Máximo</th>
          <th>Promedio</th>
        </tr>
        <tr className="tr">
          <td>{`${fechas[0]}-${fechas.at(-1)}`}</td>
          <td>{Math.min(...porcentajeFLoat)}</td>
          <td>{Math.max(...porcentajeFLoat)}</td>
          <td>{prom().toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Lunes`}</td>
          <td>{Math.min(...props.dias[0])}</td>
          <td>{Math.max(...props.dias[0])}</td>
          <td>{(props.dias[0].reduce((a, b) => a + b,0)/props.dias[0].length).toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Martes`}</td>
          <td>{Math.min(...props.dias[1])}</td>
          <td>{Math.max(...props.dias[1])}</td>
          <td>{(props.dias[1].reduce((a, b) => a + b,0)/props.dias[1].length).toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Miercoles`}</td>
          <td>{Math.min(...props.dias[2])}</td>
          <td>{Math.max(...props.dias[2])}</td>
          <td>{(props.dias[2].reduce((a, b) => a + b,0)/props.dias[2].length).toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Jueves`}</td>
          <td>{Math.min(...props.dias[3])}</td>
          <td>{Math.max(...props.dias[3])}</td>
          <td>{(props.dias[3].reduce((a, b) => a + b,0)/props.dias[3].length).toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Viernes`}</td>
          <td>{Math.min(...props.dias[4])}</td>
          <td>{Math.max(...props.dias[4])}</td>
          <td>{(props.dias[4].reduce((a, b) => a + b,0)/props.dias[4].length).toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Sabado`}</td>
          <td>{Math.min(...props.dias[5])}</td>
          <td>{Math.max(...props.dias[5])}</td>
          <td>{(props.dias[5].reduce((a, b) => a + b,0)/props.dias[5].length).toFixed(2)}</td>
        </tr>
        <tr className="tr">
          <td>{`Domingo`}</td>
          <td>{Math.min(...props.dias[6])}</td>
          <td>{Math.max(...props.dias[6])}</td>
          <td>{(props.dias[6].reduce((a, b) => a + b,0)/props.dias[6].length).toFixed(2)}</td>
        </tr>
      </thead>
        
        <tbody id="my-table">
          
        </tbody>
      </Table>
        </div>
        
    )
   
   
}
export default ShowTable;