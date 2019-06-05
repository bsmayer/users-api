import 'reflect-metadata';
import { Container } from 'inversify';

import Controller from '../util/Controller';
import UsersController from '../controllers/UsersController';
import UsersRepository from '../business/users/control/UsersRepository';
import UsersManager from '../business/users/control/UsersManager';

const container = new Container();
container.bind<Controller>('Controller').to(UsersController);
container.bind(UsersRepository).toSelf();
container.bind(UsersManager).toSelf();

export default container;
