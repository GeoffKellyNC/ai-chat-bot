require ('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {berry} = require('./twitch/berry')
const os = require('os');




const userArg = process.argv[2] 

const DEBUG = userArg === 'debug' ? true : false

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Server is up and running</h1>')
})






for (const key in interfaces) {
    for (const address of interfaces[key]) {
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }


app.listen(port, () => {
    DEBUG ? console.log('DEBUGGING IS ON!!!') : null
    console.log(`Server is running on port ${port}....`);
    console.log(`Server is also running on EXTERNAL ${addresses[0]}:${port}`)
});


module.exports = app;
