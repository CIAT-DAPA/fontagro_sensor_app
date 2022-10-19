import {React, useState} from "react";
import '../assets/styles/visualization.css'
import ReactApexChart from 'react-apexcharts'
import Carousel from 'react-bootstrap/Carousel';
import ModalCampo from "./ModalCampo";
import ModalData from "./ModalData";


function LoadDatatwo(props){
    const data= localStorage.getItem('datos')
    const campo= localStorage.getItem('campos')
    const  datos= JSON.parse(data)
    const fechas= [];
    const porcentaje=[];
    
    
   
    const getData=()=>{
        for(let i=0; i<datos.data.length;i++){
            fechas.push(datos.data[i].Fecha)
            porcentaje.push(datos.data[i].SW10)
            
        }
    }
    getData();
    porcentaje.shift();
    fechas.shift();
    

     const seriesone= [ {
        name: 'Porcentaje Humedad',
        data: porcentaje
      }];
       const optionsone= {
        chart: {
          height: 300,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: fechas
        },
        tooltip: {
          x: {
            format: 'yy/MM/dd HH:mm'
          },
        },
        annotations: {
          yaxis: [
            {
              y: '30',
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396'
                },
                text: 'Capacidad de campo'
              }
            },
            {
              y: '20',
              borderColor: 'red',
              label: {
                borderColor: 'red',
                style: {
                  color: '#fff',
                  background: 'red'
                },
                text: 'Punto de marchitez'
              }
            }
           
          ]
        }
      }
      

     const series= [{
        data: ''
      }];
       const options= {
        chart: {
          id: 'chart2',
          type: 'line',
          height: 230,
          toolbar: {
            autoSelected: 'pan',
            show: false
          }
        },
        colors: ['#546E7A'],
        stroke: {
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        }
      };
    
       const seriesLine= [{
        data: ''
      }];
       const optionsLine= {
         chart: {
          id: 'chart1',
          height: 130,
          type: 'line',
          brush:{
            target: 'chart2',
            enabled: true
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date('05 Jun 2022').getTime(),
              max: new Date('14 Aug 2022').getTime()
            }
          },
        },
        colors: ['#008FFB'],
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          }
        },
        xaxis: {
          type: 'datetime',
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      }

      const seriesline= [{
        name: "Porcentaje Humedad",
        data: porcentaje
    }];
    const optionsline= {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Comprtamiento de humedad en area',
        align: 'center'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: fechas
      }
    }


    
   const seriespr= [{
      name: 'Porcentaje de humedad',
      data: porcentaje
    }];
   const  optionspr=  {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: fechas,
        tickAmount: 10,
        labels: {
          formatter: function(value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), ' MMM:dd ')
          }
        }
      },
      title: {
        text: 'Humedad',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      yaxis: {
        min: 0,
        max: 40
      }
    }
    return (
      <>
      
       <Carousel variant="dark">
      <Carousel.Item>
      <ReactApexChart
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              />
      </Carousel.Item>
     
      <Carousel.Item>
      <ReactApexChart
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              />
      </Carousel.Item>
      <Carousel.Item>
      <ReactApexChart 
    
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              
              />
      </Carousel.Item>
    </Carousel>
        <ModalData  />
        <ModalCampo  />
      </>
    );
}
export default LoadDatatwo;
