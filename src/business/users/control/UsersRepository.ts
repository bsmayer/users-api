import { injectable } from 'inversify';
import * as mongoose from 'mongoose';

import { User, UserSchema } from '../domain/User';

@injectable()
export default class UsersRepository {
    private users: mongoose.Model<User>;

    constructor() {
        this.users = mongoose.model('users', UserSchema, 'users');
    }

    async create(user: User): Promise<User> {
        return await this.users.create(user);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.users.findByIdAndUpdate(id, user);
    }

    async findById(id: string): Promise<User> {
        return await this.users.findById(id);
    }

    async removeById(id: string): Promise<User> {
        return await this.users.findByIdAndRemove(id);
    }

    async find(): Promise<User[]> {
        return await this.users.find();
    }
}