require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const contextArray = [];

class Ai {
    constructor(){

    }


    static async textDavinci003 (question) {
        try {

            
            contextArray.push(question)

            const context = contextArray.join('/n').trim()

            console.log("🚀 ~ file: Ai.js:19 ~ Ai ~ textDavinci003 ~ context", context) //!REMOVE
    
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
            
            const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${context.length > 1 ? question : context}`,
            temperature: 0.5,
            max_tokens: 550,
            frequency_penalty: 0.5,
            presence_penalty: 0.0, 
            });

            contextArray.push(response.data.choices[0].text)
        
            return response.data.choices[0].text
        } catch (error) {
            console.log("🚀 ~ file: Ai.js:16 ~ Ai ~ textDavinci003 ~ error", error)
        }
    }
}

module.exports = Ai