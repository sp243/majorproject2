const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.port || 5000
const dbConnection = require('./db')
app.use(express.json())

app.use(cors());
app.use('/api/cars/', require('./routes/carsRoute'))
app.use('/api/users/', require('./routes/usersRoute'))
app.use('/api/bookings/', require('./routes/bookingsRoute'))

app.get('/', (req,res) => res.send('Hello World'))
app.listen(port, () => console.log(`Node JS Server started in Port ${port}`))

app.use(cors({
    origin: 'http://localhost:5000/'
  }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});