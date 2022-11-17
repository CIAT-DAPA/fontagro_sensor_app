
import {React,useContext} from "react";
import ReactApexChart from "react-apexcharts";
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

function BoxPlotDias(){
  const { inicio } = useContext(DataContext);
  const { fin } = useContext(DataContext);
  const { contextDatao } = useContext(DataContext);


  
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
  /* const fechas = [];
  const porcentaje = [];
  const getData = () => {
    for (let i = 0; i < datos.data.length; i++) {
      fechas.push(datos.data[i].Fecha);
      porcentaje.push(datos.data[i].SW10);
    }
  }; 
  getData(); */
  console.log(groups);
  
  porcentaje.shift();
  fechas.shift();

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
 
  
  const series= [
    {
      type: 'boxPlot',
      data: x
    }
  ]
   const options= {
    chart: {
      type: 'boxPlot',
      height: 350
    },
    title: {
      text: '',
      align: 'left'
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
        text: "Dias Totales",
      },  
    },
    annotations: {
      yaxis: [
        
        {
         
          borderColor: "",
          label: {
            borderColor: "",
            style: {
              color: "#fff",
              background: "",
            },
           
            
          },
        },
        {
         
          borderColor: "",
          label: {
            borderColor: "",
            style: {
              color: "#fff",
              background: "",
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
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#5C4742',
          lower: '#A5978B'
        }
      }
    }
  }
  if(contextDatao[0]!= undefined && contextDatao[1]!= undefined){
        
    options.yaxis[0]['min'] = 0
    options.yaxis[0]['max'] = 60 
    options.annotations.yaxis[0].borderColor='red'
    options.annotations.yaxis[0].label.borderColor='red'
    options.annotations.yaxis[0].label.style.background='red'
    options.annotations.yaxis[1].borderColor='#00E396'
    options.annotations.yaxis[1].label.borderColor='#00E396'
    options.annotations.yaxis[1].label.style.background='#00E396'
    options.annotations.yaxis[0]['y']=contextDatao[1]
    options.annotations.yaxis[1]['y']=contextDatao[0]
    options.annotations.yaxis[1].label['text'] = 'Capacidad de campo';
    options.annotations.yaxis[0].label['text'] = 'Punto de marchitez';
   }
  

    return(
      <div id="chart">
      <ReactApexChart options={options} series={series} type="boxPlot" height={350} />
    </div>
    )
}
export default BoxPlotDias;