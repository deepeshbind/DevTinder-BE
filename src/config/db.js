const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://kraftygifthouse_db_user:pPoSbCpAWxO9eY6n@cluster0.mekjv7e.mongodb.net/devTinder"
    );
};

module.exports = connectDB;