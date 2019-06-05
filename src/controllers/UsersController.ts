import { injectable } from 'inversify';
import { Application, Request, Response, Router } from 'express';

import Controller from '../util/Controller';
import UsersManager from '../business/users/control/UsersManager';
import { User } from './../business/users/domain/User';

@injectable()
export default class UsersController implements Controller {
    constructor(private usersManager: UsersManager) {}

    public register(app: Application): void {
        const router = Router();

        router.post('/', (request: Request, response: Response) => {
            this.usersManager.create(request.body as User)
                .then(user => response.status(201).send(user))
                .catch(err => response.status(400).send(err.message));
        });

        router.get('/', (request: Request, response: Response) => {
            this.usersManager.findAll()
                .then(users => response.status(200).send(users))
                .catch(err => response.status(400).send(err.message));
        });

        router.get('/:id', (request: Request, response: Response) => {
            this.usersManager.findById(request.params.id)
                .then(user => response.status(200).send(user))
                .catch(err => response.status(400).send(err.message));
        });
        
        router.put('/:id', (request: Request, response: Response) => {
            this.usersManager.update(request.params.id, request.body as User)
                .then(() => response.status(200).send())
                .catch(err => response.status(400).send(err.message));
        });

        router.delete('/:id', (request: Request, response: Response) => {
            this.usersManager.removeById(request.params.id)
                .then(() => response.status(200).send())
                .catch(err => response.status(400).send(err.message));
        });

        app.use('/users', router);
    }
}