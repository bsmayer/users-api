import { Application } from 'express';

export default interface Controller {
    register(app: Application): void;
}