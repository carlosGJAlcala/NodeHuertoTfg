const express = require('express');
const {SerialPort} = require('serialport');
const {ReadlineParser } = require('@serialport/parser-readline');
const { updateSensor,updateSensorDepositoAgua } = require('./SensorRepository');
const app = express();
const port = 3000; 
const Sensor = require('./Sensor'); // Importa la clase Sensor

const portName = 'COM3'; 
const baudRate = 9600;


const serialPort = new SerialPort({
    path: portName,
    baudRate: baudRate,
    autoOpen: false,

  })

  const parser = serialPort.pipe(new ReadlineParser());

  const mandarDatosPut = (sensor) => {
    updateSensor(sensor).then(response => {
        const resultboolean = Boolean(response.data);
        console.log(resultboolean);
    });}

    const mandarDatosPutDepositoAgua = (sensor) => {
      updateSensorDepositoAgua(sensor).then(response => {
          const resultboolean = Boolean(response.data);
          console.log(resultboolean);
      });}
serialPort.open((err) => {
  if (err) {
    return console.error('Error abriendo el puerto:', err.message);
  }
  console.log('Puerto serie abierto');
});

let arduinoData = '';

parser.on('data', (data) => {
  console.log('Datos recibidos del Arduino:', data);
  arduinoData = JSON.parse(data); 

  const sensor = Sensor.fromJSON(arduinoData);

  if(sensor.nombreSensor==="Sensor de Distancia"){
    mandarDatosPutDepositoAgua(arduinoData);
  }
  else{
   mandarDatosPut(arduinoData);  

  }


});

app.get('/data', (req, res) => {
  res.json({ data: arduinoData });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
