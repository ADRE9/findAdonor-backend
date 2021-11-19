const mongoose = require('mongoose');

const URL = process.env.URI;
const DBNAME = process.env.DBNAME;

const connectDB = async () => {
  try {
    await mongoose.connect(`${URL}`, {
      dbName:DBNAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
  } catch (error) {
    console.log('Not able to connect to the database' + error);
  }
};

mongoose.connection.on('connected', () => {
  console.log("Connection Established");
});

mongoose.connection.on('reconnected', () => {
  console.log("Reconnected to the Database");
});

mongoose.connection.on('disconnected', () => {
  console.log("Disconnected");
});

mongoose.connection.on('error', (error) => {
  console.log("Disconnected"+error);
});

process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    console.log('Database disconnected because app terminated');
    process.exit(0);
  })
})

module.exports = connectDB;