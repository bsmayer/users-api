import * as express from 'express';
import * as bodyParser from 'body-parser';

import Controller from '../util/Controller'
import container from '../config/ioc';

const app = express();
app.use(bodyParser.json());

// Registering routes
container.getAll<Controller>('Controller')
    .forEach(controller => controller.register(app));

app.listen(process.env.PORT, () => console.log(`API RUNNING ON PORT ${process.env.PORT}`));