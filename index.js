const express = require('express');
const connectDB = require('./database');

//routers
const userRoutes = require('./routers/userRoutes');

const app = express();

app.use(express.json());
connectDB();

var environment = process.env.NODE_ENV;

// app.get("/*", (req, res) => {
//   res.send("Hello World");
// });

//routers used
app.use(userRoutes);

const PORT = environment==="production"?process.env.PORT:8000;

app.listen(PORT, () => {
  console.log('App is listening on port '+PORT)
})