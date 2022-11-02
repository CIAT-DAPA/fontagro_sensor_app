import {React,useContext} from "react";
import ReactApexChart from "react-apexcharts";
import { DataContext } from "../context/StaticContex";

    
function GraficaLinea(){
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
  const seriesone = [
    {
      name: "Porcentaje Humedad",
      data: porcentaje,
    },
  ];
  const optionsone = {
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
      text: "",
      align: "left",
    },

    tooltip: {
      x: {
        format: "dd-MM-yy:HH:mm",
      },
    },

    yaxis: [
      {
        title: {
          text: "Porcentaje de Humedad",
        },
        max: 60,
        min: 0,
      },
    ],

    annotations: {
      yaxis: [
        {
          y: contextDatao[0],
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Capacidad de campo",
          },
        },
        {
          y: contextDatao[1],
          borderColor: "red",
          label: {
            borderColor: "red",
            style: {
              color: "#fff",
              background: "red",
            },
            text: "Punto de marchitez",
          },
        },
      ],
    },
  };

    return(
        <ReactApexChart
            options={optionsone}
            series={seriesone}
            type="line"
            height={350}
          />
    )
}
export default  GraficaLinea;