import {React, useState} from "react";
import '../assets/styles/visualization.css'
import ReactApexChart from 'react-apexcharts'


/* import ModalData from "./ModalData";
import ModalDate from "./ModalDate"; */

function LoadDatatwo(){
    const data= localStorage.getItem('datos')
    const nombre= localStorage.getItem('nombre')
    const  datos= JSON.parse(data)
    const fechas= [];
    const porcentaje=[];
   
    const getData=()=>{
        for(let i=0; i<datos.data.length;i++){
            fechas.push(datos.data[i].Fecha)
            porcentaje.push(datos.data[i].SW10)
            
        }
    }
    const datosP = [5,6,7,8,9,11,12]
    getData()
    console.log(parseFloat(porcentaje))
    porcentaje.shift()
    fechas.shift()
   
    
   
     const seriesone= [ {
        name: 'Porcentaje Humedad',
        data: porcentaje
      }];
       const optionsone= {
        chart: {
          height: 350,
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
      }
      

     const series= [{
        data: datosP
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
        data: datosP
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
  


       
    return(
        <>
        
        <div className="plots-container">
          <p>Comportamiento de humedad</p>
          <div id="chart">
              <ReactApexChart options={optionsone} series={seriesone} type="line" height={350} />
              <ReactApexChart options={optionspr} series={seriespr} type="area" height={450} />
              {/* <ReactApexChart options={optionsline} series={seriesline} type="area" height={350} /> */}
            {/*   <ReactApexChart options={optionsone} series={seriesone} type="bar" height={350} /> */}

          </div>
          <div id="wrapper">
            <div id="chart-line2">
              <ReactApexChart options={options} series={series} type="line" height={230} />
            </div>
            <div id="chart-line">
             <ReactApexChart options={optionsLine} series={seriesLine} type="area" height={130} />
            </div>
        </div>
         
        </div>     
      {/*   <ModalDate showw={showw} handleClosee={handleClosee} />  
        <ModalData show={show} handleClose={handleClose} /> */}
        
        </>
        
    );
}
export default LoadDatatwo;