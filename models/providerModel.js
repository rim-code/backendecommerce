const mongoose = require('mongoose')


//discriminator est une fct model permet de specifier 
//une cle (exp:"client") et avec cette cle nous pouvons stocker différebts entité  dans une collection //1etape appel userModel tnajmtsami user 
const userModel = require('./userModel')

const schemaProvider = new mongoose.Schema({

        company: {
            type: String,
            required: true
        },

        matricule: {
            type: String,
            required: true
        },


        service: {
            type: String,
            required: true
        },

    }

)

module.exports = userModel.discriminator('Provider', schemaProvider) //2etape méthode discriminator