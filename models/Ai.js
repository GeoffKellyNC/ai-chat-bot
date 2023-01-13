require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");




class Ai {
    constructor(){

    }


    static async textDavinci003 (question) {
        try {
    
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
            
            const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${question}`,
            temperature: 0.5,
            max_tokens: 150,
            frequency_penalty: 0.5,
            presence_penalty: 0.0, 
            });
        
            return response.data.choices[0].text
        } catch (error) {
            console.log("🚀 ~ file: Ai.js:16 ~ Ai ~ textDavinci003 ~ error", error)
        }
    }
}

module.exports = Ai