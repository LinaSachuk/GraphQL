import mongoose from 'mongoose';

// Mongo connnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useMongoClient: true
});

