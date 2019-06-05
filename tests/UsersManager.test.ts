import 'reflect-metadata';

import * as Moq from 'typemoq'

import UsersManager from '../src/business/users/control/UsersManager';
import UsersRepository from '../src/business/users/control/UsersRepository';
import { User } from '../src/business/users/domain/User';

const user = {
    email: 'bs.mayer@hotmail.com',
    givenName: 'Bruno',
    familyName: 'Mayer'
} as User;

const repository: Moq.IMock<UsersRepository> = Moq.Mock.ofType(UsersRepository);
const manager = new UsersManager(repository.object);

describe('Users Manager - Unit Tests', () => {
    it('Should not create an user if model is not valid', () => {
        expect(async () => await manager.create(null)).rejects;
    });

    it('Should create an user and return it', async () => {
        repository.setup(x => x.create(user))
            .returns(() => Promise.resolve({
                ...user,
                created: new Date()
            } as User));
        
        const response = await manager.create(user);
        expect(response.givenName).toEqual(user.givenName);
        expect(response.familyName).toEqual(user.familyName);
        expect(response.email).toEqual(user.email);
        expect(response.created).not.toBeNull();
    });

    it('Should not update an user if model is not valid', () => {
        expect(async () => await manager.update('someid', null)).rejects;
    });

    it('Should not update an user if id was not provided', () => {
        expect(async () => await manager.update(null, null)).rejects;
    });

    it('Should reject if user not updated on the database', () => {
        repository.setup(x => x.update('userid', user))
            .returns(() => Promise.resolve(null));

        expect(async () => await manager.update('userid', user)).rejects;
    });
});