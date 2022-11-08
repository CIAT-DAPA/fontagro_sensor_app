import {React,useContext} from "react";
import ReactApexChart from "react-apexcharts";
import { DataContext } from "../context/StaticContex";

function ColorGraphic(){
  const { inicio } = useContext(DataContext);
  const { fin } = useContext(DataContext);
  const { contextDatao } = useContext(DataContext);
  const data = localStorage.getItem("datos");
  const datos = JSON.parse(data);
  let ini= new Date(inicio)
  let fi= new Date(fin)
  const hasfilter= inicio && fin;

  const filterP= hasfilter ?  datos.data.filter(dato=>new Date(dato.Fecha) > ini && new Date(dato.Fecha) <=fi) : datos.data


  const fechas = filterP.map(dato=>dato.Fecha);
  const porcentaje = filterP.map(dato=>parseFloat(dato.SW10));
  porcentaje.shift();
  fechas.shift();
  const series = [
    {
      name: "Porcentaje Humedad",
      data: porcentaje,
    },
  ];
  const options = {
    /* theme:{
          mode:'dark'
        }, */
    chart: {
      height: 300,
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      title: {
        text: "Fechas",
      },

      type: "datetime",
      categories: fechas,
    },
    title: {
      text: '',
      align: "left",
    },

    tooltip: {
      x: {
        format: "dd-MM-yy HH:mm",
      },
    },

    yaxis: [
      {
        title: {
          text: "Porcentaje de Humedad (%)",
        },
        max: 60,
        min: 0,
      },
    ],

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
  };


if(contextDatao[0]!= undefined && contextDatao[1]!= undefined){
  options.annotations.yaxis[0]['y']=contextDatao[1]
  options.annotations.yaxis[1]['y']=contextDatao[0]
  options.annotations.yaxis[0].label['text'] = 'Capacidad de campo';
  options.annotations.yaxis[1].label['text'] = 'Punto de Marchitez';
 }
    return(
        <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
    )
}
export default ColorGraphic;