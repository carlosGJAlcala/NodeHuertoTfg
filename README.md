
# NodeHuertoTfg

**Descripción:**
NodeHuertoTfg es una aplicación desarrollada en Node.js que captura datos de un dispositivo Arduino y los envía a un servidor para su procesamiento y almacenamiento. Este proyecto forma parte de un Trabajo de Fin de Grado (TFG) enfocado en la monitorización y gestión de huertos inteligentes.

## Características

- **Captura de Datos:** Recopila información de sensores conectados al Arduino, como temperatura, humedad y otros parámetros ambientales.
- **Envío de Datos al Servidor:** Transfiere los datos capturados a un servidor remoto para su análisis y visualización.
- **Arquitectura Modular:** Código organizado en módulos para facilitar su mantenimiento y escalabilidad.

## Tecnologías Utilizadas

- **Backend:** Node.js
- **Comunicación Serial:** Librería `serialport` para la interacción con el Arduino.
- **Gestión de Dependencias:** npm

## Estructura del Proyecto

- `index.js`: Punto de entrada principal de la aplicación.
- `Sensor.js`: Módulo que define la estructura y métodos relacionados con los sensores.
- `SensorRepository.js`: Módulo encargado de la lógica de almacenamiento y gestión de datos de los sensores.
- `apiRoutes.js`: Define las rutas de la API para la interacción con el servidor.
- `package.json`: Archivo de configuración que incluye las dependencias y scripts del proyecto.

## Requisitos Previos

- **Hardware:**
  - Arduino con sensores adecuados para la monitorización del huerto.
  - Conexión estable entre el Arduino y el servidor (por ejemplo, mediante USB o conexión serial).

- **Software:**
  - Node.js instalado en el sistema.
  - npm para la gestión de dependencias.

## Instalación y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/carlosGJAlcala/NodeHuertoTfg.git
   cd NodeHuertoTfg
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Configurar la conexión serial:**
   - Asegúrate de que el Arduino esté correctamente conectado al sistema.
   - Verifica el puerto serial asignado al Arduino y actualiza la configuración en el código si es necesario.

4. **Iniciar la aplicación:**

   ```bash
   node index.js
   ```

   La aplicación comenzará a capturar datos del Arduino y enviarlos al servidor configurado.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Envía un pull request detallando las modificaciones propuestas.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Para más detalles, consulta el archivo `LICENSE` en el repositorio.

