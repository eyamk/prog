import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const url = 'mongodb://localhost:27017/training-project';
const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then(() => console.log('Connected to database'));

const server= new ApolloServer({ typeDefs, resolvers });

connect.then(() => {
server.listen().then(({ url }));
});