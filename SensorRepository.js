const axios = require('axios'); // Importar Axios
const { apiRoutes } = require('./apiRoutes');


 const updateSensor = async ( sensor) => {
    try {
        const response = await axios.put(apiRoutes.sensor.update,sensor);
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Sensor con id ${sensor.id}`, error);
        throw error;
    }
};

 const updateSensorDepositoAgua = async ( sensor) => {
    try {
        const response = await axios.put(apiRoutes.sensor.updateSenDepAgua, sensor);
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Sensor con id ${sensor.id}`, error);
        throw error;
    }
};
module.exports = {
    updateSensor,
    updateSensorDepositoAgua
  };