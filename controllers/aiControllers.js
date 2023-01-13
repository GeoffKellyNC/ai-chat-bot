require('dotenv').config()
const Ai = require('../models/Ai')




exports.sendChat = async (req, res) => {
    try {
        const userQuestion = req.body;

        console.log("🚀 ~ file: aiControllers.js:10 ~ exports.sendChat= ~ userQuestion", userQuestion.data.message) //!REMOVE

        const aiResponse = await Ai.textDavinci003(userQuestion.data.message)

        res.status(200).json(aiResponse)





    } catch (error) {
        res.status(500).json(error)
        console.log("🚀 ~ file: aiControllers.js:11 ~ exports.sendChat= ~ error", error)
        
    }
}