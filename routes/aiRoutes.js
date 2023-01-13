const express = require("express");
const aiControllers = require('../controllers/aiControllers')
const router = express.Router();



router
    .route("/send-chat")
    .post(aiControllers.sendChat)


module.exports = router;





