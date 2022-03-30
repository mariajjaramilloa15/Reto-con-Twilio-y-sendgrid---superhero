const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { logErrors, errorHandler, BoomerrorHandler } = require('./src/handlers/errors.handler');
const routerApi = require('./src/routes');
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => console.log('Active port', port));

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Success connection with mongo'))
  .catch((error) => console.error(error));

/* Respuestas a solicitudes http en formato JSON */
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);
app.use(BoomerrorHandler);
/* Permitir hacer el llamado de los request */
routerApi(app);
