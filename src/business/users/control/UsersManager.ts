import { injectable } from 'inversify';
import { Types } from 'mongoose';

import UsersRepository from './UsersRepository';
import { User } from '../domain/User';

@injectable()
export default class UsersManager {
    constructor(private usersRepository: UsersRepository) {}

    async create(user: User): Promise<User> {
        if (!user)
            throw Error('Not a valid user');

        return await this.usersRepository.create(user);
    }

    async update(id: string, user: User): Promise<boolean> {
        if (!user)
            throw Error('Not a valid user');
        if (!id)
            throw Error('Not a valid user id');

        user.updated = new Date();

        const updated = await this.usersRepository.update(id, user);
        if (!updated)
            throw Error('User not found with the given id');
        
        return true;
    }

    async removeById(id: string): Promise<boolean> {
        if (!id)
            throw Error('Not a valid user id');
        
        const removed = await this.usersRepository.removeById(id);
        if (!removed)
            throw Error('User not found with the given id');
        
        return true;
    }

    async findById(id: string): Promise<User> {
        if (!id)
            throw Error('Not a valid user id');

        return await this.usersRepository.findById(id);
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }
}