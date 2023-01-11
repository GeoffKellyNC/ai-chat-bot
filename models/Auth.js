require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios')

class Auth {
  constructor(data) {
    this.usersName = data.userName;
    this.email = data.email;
    this.password = data.password
  }
}