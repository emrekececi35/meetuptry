/* eslint-disable no-console */

import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes } from './modules';

const app = express();

/**
* Veri Tabanı
*/
dbConfig();
/**
* Middlewares
*/
middlewaresConfig(app);

app.use('/api',[MeetupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
