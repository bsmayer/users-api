import * as mongoose from 'mongoose';

if (!process.env.MONGO_URI)
    throw Error('Please, provide the Mongodb connection string');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to Mongodb'));
mongoose.connection.on('disconnected', () => console.log('Lost connection to Mongodb... Trying to reconnect'));
mongoose.connection.on('reconnected', () => console.log('Connected to Mongodb'));


