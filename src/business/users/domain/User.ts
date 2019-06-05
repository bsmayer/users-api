import { Schema, Document, Types } from 'mongoose';

// Our user model
export interface User extends Document {
    email: string;
    givenName: string;
    familyName: string;
    created: Date;
    updated: Date;
}

// Mongoose schema
export const UserSchema = new Schema({
    email: String,
    givenName: String,
    familyName: String,
    created: Date,
    updated: Date
}, { versionKey: false })

.pre('save', function() {
    const user = this as any;
    if (!user.created) {
        user.created = new Date();
    }
})
