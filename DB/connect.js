const mongoose = require('mongoose');

const ConnectDB = async (url) => {
    mongoose.connect(url);
}

module.exports = ConnectDB;