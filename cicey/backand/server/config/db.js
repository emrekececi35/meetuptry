

import mongoose from 'mongoose';


export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetupME');

    mongoose.connection
    .once('open',()=> console.log('MongoDB calisiyor'))
        .on('eror',err =>console.error(err));
};