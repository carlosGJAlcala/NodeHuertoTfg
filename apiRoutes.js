const port='8080';
const ip='localhost';
const API_BASE_URL='http://'+ip+':'+port;
 const apiRoutes={
    sensor:{
        getAll: `${API_BASE_URL}/sensor`,
        getById: (id) => `${API_BASE_URL}/sensor/${id}`,
        getByUserName: (userName)=>`${API_BASE_URL}/sensor/userName/${userName}`,

        getByNombre: (nombre) => `${API_BASE_URL}/sensor/${nombre}`,
        create: `${API_BASE_URL}/sensor`,
        update:  `${API_BASE_URL}/sensor`,
        updateSenDepAgua: `${API_BASE_URL}/sensorDepositoAgua`,
        delete: (id) => `${API_BASE_URL}/sensor/${id}`  
    },
}
module.exports={
    apiRoutes
}