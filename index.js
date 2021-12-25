const express = require('express');
const connectDB = require('./database');

//routers
const userRoutes = require('./routers/userRoutes');
const bloodBankRoutes = require('./routers/bloodBankRoutes');

const app = express();

app.use(express.json());
connectDB();

var environment = process.env.NODE_ENV;

//routers used
app.use(userRoutes);
app.use(bloodBankRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = environment==="production"?process.env.PORT:8000;

app.listen(PORT, () => {
  console.log('App is listening on port '+PORT)
})