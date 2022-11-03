import React from "react";
function ShowTable(){
    const data = localStorage.getItem("datos");
    const datos = JSON.parse(data);
    console.log(datos.data[1].Fecha)
    
    return(
        <table className="table table-striped">
            <tr className="bg-info">
                <th>Fechas</th>
                <th>Porcentaje Humedad</th>
            </tr>
            <tbody id="myTable"></tbody>
        </table>
    )
    const buldTable=()=>{
        var table= document.getElementById('myTable')
            
    
            for (let i=0; i<datos.data.length;i++){
                let row=`
                <tr>
                    <td> ${datos.data[1].Fecha}<td/>
                    <td> ${datos.data[4].SW10}<td/>
                <tr/>
                `
            table.innerHTML= row
            }
        }
    buldTable()
}
export default ShowTable;