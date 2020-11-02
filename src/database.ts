import mongoose from 'mongoose';

const mongo_uri: string = process.env.MONGO_URI || 'mongodb://localhost/replaceme';

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));