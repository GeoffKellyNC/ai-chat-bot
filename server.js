require ('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {berry} = require('./twitch/berry')
const os = require('os');
