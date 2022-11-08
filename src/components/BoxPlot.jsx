
import {React,useContext} from "react";
import ReactApexChart from "react-apexcharts";
import { DataContext } from "../context/StaticContex";
import '../assets/styles/boxplot.css'

function BoxPlot(){
  const { contextDatao } = useContext(DataContext);

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
  const lunes=[];
  const martes=[];
  const miercoles=[];
  const jueves=[];
  const viernes=[];
  const sabado=[];
  const domingo=[];
  const fechasEnDias= fechas.map(fecha=>new Date(fecha));
  for(let i=0; i<fechasEnDias.length; i++){
    if(fechasEnDias[i].getDay()==1){
      lunes.push(parseFloat(porcentaje[i]));
    }
    else if(fechasEnDias[i].getDay()==2){
      martes.push(parseFloat(porcentaje[i]));
    }
    else if(fechasEnDias[i].getDay()==3){
      miercoles.push(parseFloat(porcentaje[i]));
    }
    else if(fechasEnDias[i].getDay()==4){
      jueves.push(parseFloat(porcentaje[i]));
    }
    else if(fechasEnDias[i].getDay()==5){
      viernes.push(parseFloat(porcentaje[i]));
    }
    else if(fechasEnDias[i].getDay()==6){
      sabado.push(parseFloat(porcentaje[i]));
    }
    else if(fechasEnDias[i].getDay()==0){
      domingo.push(parseFloat(porcentaje[i]));
    }
    
    
  }
  const porcentajeFLoat= porcentaje.map(porcent=>parseFloat(porcent));
  //arrays ascendentes
  const arrayLunesAsc= porcent=>  lunes.sort((a,b)=>a-b);
  const arrayMartesAsc= porcent=>  martes.sort((a,b)=>a-b);
  const arrayMiercolesAsc= porcent=>  miercoles.sort((a,b)=>a-b);
  const arrayJuevesAsc= porcent=>  jueves.sort((a,b)=>a-b);
  const arrayViernesAsc= porcent=>  viernes.sort((a,b)=>a-b);
  const arraySabadoAsc= porcent=>  sabado.sort((a,b)=>a-b);
  const arrayDomingoAsc= porcent=>  domingo.sort((a,b)=>a-b);
  
  //suma de  arrays
  const arraySumLunes =porcent=> lunes.reduce((a, b) => a + b,0);
  const arraySumMartes =porcent=> martes.reduce((a, b) => a + b,0);
  const arraySumMiercoles =porcent=> miercoles.reduce((a, b) => a + b,0);
  const arraySumJueves =porcent=> jueves.reduce((a, b) => a + b,0);
  const arraySumViernes =porcent=> viernes.reduce((a, b) => a + b,0);
  const arraySumSabado =porcent=> sabado.reduce((a, b) => a + b,0);
  const arraySumDomingo =porcent=> domingo.reduce((a, b) => a + b,0);
  

  //media
  const media = porcent=>  arraySumLunes(porcentajeFLoat) / porcentajeFLoat.length;
  //valores maximos
  const maxLunes= porcent=> Math.max(...lunes)
  const maxMartes= porcent=> Math.max(...martes)
  const maxMiercoles= porcent=> Math.max(...miercoles)
  const maxJueves= porcent=> Math.max(...jueves)
  const maxViernes= porcent=> Math.max(...viernes)
  const maxSabado= porcent=> Math.max(...sabado)
  const maxDomingo= porcent=> Math.max(...domingo)
 
  //valores minimos
  const minLunes= porcent=> Math.min(...lunes)
  const minMartes= porcent=> Math.min(...martes)
  const minMiercoles= porcent=> Math.min(...miercoles)
  const minJueves= porcent=> Math.min(...jueves)
  const minViernes= porcent=> Math.min(...viernes)
  const minSabado= porcent=> Math.min(...sabado)
  const minDomingoo= porcent=> Math.min(...domingo)
 //cuartil lunes
const quantilel = (lunes, q) => {
  const sorted = arrayLunesAsc(lunes);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25l = porcent => quantilel(lunes, .25);


const q50l = porcent => quantilel(lunes, .50);

const q75l = porcent => quantilel(lunes, .75);

const medianl = porcent => q50l(lunes);
//cuartil martes
const quantilem = (martes, q) => {
  const sorted = arrayMartesAsc(martes);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25m = porcent => quantilem(martes, .25);


const q50m = porcent => quantilem(martes, .50);

const q75m = porcent => quantilem(martes, .75);

const medianm = porcent => q50m(martes);
//cuartil miercoles
const quantilemi = (miercoles, q) => {
  const sorted = arrayMiercolesAsc(miercoles);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25mi = porcent => quantilemi(miercoles, .25);


const q50mi = porcent => quantilemi(miercoles, .50);

const q75mi = porcent => quantilemi(miercoles, .75);

const medianmi = porcent => q50mi(miercoles);
//cuartil jueves
const quantilej = (jueves, q) => {
  const sorted = arrayJuevesAsc(jueves);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25j = porcent => quantilej(jueves, .25);


const q50j = porcent => quantilej(jueves, .50);

const q75j = porcent => quantilej(jueves, .75);

const medianj = porcent => q50j(jueves);
//cuartil viernes 
const quantilev = (viernes, q) => {
  const sorted = arrayViernesAsc(viernes);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25v = porcent => quantilev(viernes, .25);


const q50v = porcent => quantilev(viernes, .50);

const q75v = porcent => quantilev(viernes, .75);

const medianv = porcent => q50v(viernes);
//cuaril sabado
const quantiles = (sabado, q) => {
  const sorted = arraySabadoAsc(sabado);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25s = porcent => quantiles(sabado, .25);


const q50s = porcent => quantiles(sabado, .50);

const q75s = porcent => quantiles(sabado, .75);

const medians = porcent => q50s(sabado);

const quantiled = (domingo, q) => {
  const sorted = arrayDomingoAsc(domingo);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25d = porcent => quantiled(domingo, .25);


const q50d = porcent => quantiled(domingo, .50);

const q75d = porcent => quantiled(domingo, .75);

const mediand = porcent => q50d(domingo);



    const series= [
        {
          type: 'boxPlot',
          data: [
            
            {
              x: `Lunes`,
              y: [minLunes(), q25l(), medianl(), q75l(),maxLunes() ],
            },
            {
              x: `Martes`,
              y: [minMartes(), q25m(), medianm(), q75m(),maxMartes() ],
            },
            {
              x: `Miercoles`,
              y: [minMiercoles(), q25mi(), medianmi(), q75mi(),maxMiercoles() ],
            },
            {
              x: `Jueves`,
              y: [minJueves(), q25j(), medianj(), q75j(),maxJueves() ],
            },
            {
              x: `Viernes`,
              y: [minViernes(), q25v(), medianv(), q75v(),maxViernes() ],
            },
            {
              x: `Sabado`,
              y: [minSabado(), q25s(), medians(), q75s(),maxSabado() ],
            },
            {
              x: `Domingo`,
              y: [minDomingoo(), q25d(), mediand(), q75d(),maxDomingo() ],
            }
          ],
          
         
        }
      ]
     const  options= {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#5C4742',
              lower: '#A5978B'
            }
          }
        },
        yaxis: [
          {
            title: {
              text: "Porcentaje de humedad (%)",
            },
            
            
          },
        ],
        xaxis: {
          title: {
            text: "Dias de la Semana",
            
          },
          
    
          
        },
        tooltip: {
          x: {
            format: "dd-MM-yy HH:mm",
          },
        },
        annotations: {
          yaxis: [
            {
             
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  color: "#fff",
                  background: "#00E396",
                },
                
              },
            },
            {
             
              borderColor: "red",
              label: {
                borderColor: "red",
                style: {
                  color: "#fff",
                  background: "red",
                },
               
                
              },
            },
            {
              y: contextDatao[0],
              y2: contextDatao[1],
    
              borderColor: "#000",
              fillColor: "#00E396",
              opacity: 0.2,
              label: {
                borderColor: "#333",
                style: {
                  fontSize: "10px",
                  color: "#333",
                  background: "#00E396",
                },
              },
            },
            {
              y: contextDatao[1],
              y2: 0,
    
              borderColor: "#000",
              fillColor: "red",
              opacity: 0.2,
              label: {
                borderColor: "#333",
                style: {
                  fontSize: "10px",
                  color: "#333",
                  background: "#FEB019",
                },
              },
            },
            {
              y: contextDatao[0],
              y2: 60,
    
              borderColor: "#000",
              fillColor: "#128ae6",
              opacity: 0.2,
              label: {
                borderColor: "#333",
                style: {
                  fontSize: "10px",
                  color: "#333",
                  background: "#128ae6",
                },
              },
            }
          ],
        },
        
      }
      
      
       if(contextDatao[0]!= undefined && contextDatao[1]!= undefined){
        options.yaxis[0]['min'] = 0
        options.yaxis[0]['max'] = 60 
        options.annotations.yaxis[0]['y']=contextDatao[1]
        options.annotations.yaxis[1]['y']=contextDatao[0]
        options.annotations.yaxis[0].label['text'] = 'Capacidad de campo';
        options.annotations.yaxis[1].label['text'] = 'Punto de marchitez';
       }
      
    
      return(
        <div id="chart">
          <ReactApexChart options={options} series={series} type="boxPlot" height={350}  />
        </div>
        
    )
    
    };
  
   
export default BoxPlot;