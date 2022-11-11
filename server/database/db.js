import mongoose from 'mongoose';

const Connection = async (username, password) => {
    //const URL =`mongodb://${username}:${password}@ac-jvrlk2j-shard-00-00.dwhocdd.mongodb.net:27017,ac-jvrlk2j-shard-00-01.dwhocdd.mongodb.net:27017,ac-jvrlk2j-shard-00-02.dwhocdd.mongodb.net:27017/?ssl=true&replicaSet=atlas-122o3x-shard-0&authSource=admin&retryWrites=true&w=majority`;
   const URL =`mongodb://${username}:${password}@ac-w1vxg5q-shard-00-00.kjzkqgj.mongodb.net:27017,ac-w1vxg5q-shard-00-01.kjzkqgj.mongodb.net:27017,ac-w1vxg5q-shard-00-02.kjzkqgj.mongodb.net:27017/?ssl=true&replicaSet=atlas-14fxmu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;