import { React, useContext, useState } from "react";
import "../assets/styles/visualization.css";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../context/StaticContex";
function LoadDatatwo(props) {
  let tituloGrafica = "";
  let tituloGeneral = "";
  let tituloInicio='Ingrese sus datos e ingrese su tipo de campo presionando en el menu, parte superior derecha';
  const { contextDatao } = useContext(DataContext);
  const { nombreP } = useContext(DataContext);
  const { finca } = useContext(DataContext);
  const { inicio } = useContext(DataContext);
  const { fin } = useContext(DataContext);
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
  const fe = fechas.toString().split(" ").join("").replace(/\//g, "-");
  if (contextDatao[2] != undefined) {
    tituloGrafica = `Tipo de Suelo de la finca:  ${contextDatao[2]}`;
    tituloInicio=''
  } else {
    tituloGrafica = "";
  }
  if (nombreP != "" && finca != "") {
    tituloGeneral = `Usuario:  ${nombreP},  el comportamiento  de humedad de la finca:  ${finca} en el periodo ${
      fechas[0]
    } hasta el ${fechas.at(-1)}  fue el siguiente: `;
    tituloInicio=''
  } else {
    tituloGeneral = "";
  }

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
        {
          y: contextDatao[0],
          y2: contextDatao[1],

          borderColor: "#000",
          fillColor: "#c87b20",
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
          fillColor: "#5dd0e3",
          opacity: 0.2,
          label: {
            borderColor: "#333",
            style: {
              fontSize: "10px",
              color: "#333",
              background: "#FEB019",
            },
          },
        }
      ],
    },
  };

  return (
    <>
    <p>{tituloInicio}</p>
    <p>{tituloGrafica} </p>

    <p>{tituloGeneral}</p>
          
      <Carousel variant="dark">
      <Carousel.Item className="jej">
      <ReactApexChart
            options={optionsone}
            series={seriesone}
            type="line"
            height={350}
          />
        
      </Carousel.Item>
      <Carousel.Item>
      <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
       
      </Carousel.Item>

    </Carousel>
      <div className="plots-container">
        <p></p>
        <div id="chart">
          
          <p>
            En la grafica puede ver el comportamiento de la humedad de suelo en
            el tiempo, al ingresar el tipo de campo de su finca, podra
            visualizar dos lineas que represetan los limites de humedad aptos para su suelo.
          </p>
          <div className="colors">
            <div className="baja"></div> <p className="humedad">Humedad Baja </p>
            <div className="media"></div><p className="humedad"> Humedad Media </p>
            <div className="alta" ></div><p className="humedad">Humedad Alta </p>
          </div>
          
        </div>
       
      </div>
    </>
  );
}
export default LoadDatatwo;
