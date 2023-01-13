require('dotenv').config()
const Ai = require('../models/Ai')




exports.sendChat = async (req, res) => {
    try {
        const userQuestion = req.body;

        console.log("🚀 ~ file: aiControllers.js:10 ~ exports.sendChat= ~ userQuestion", userQuestion) //!REMOVE




    } catch (error) {
        console.log("🚀 ~ file: aiControllers.js:11 ~ exports.sendChat= ~ error", error)
        
    }
}