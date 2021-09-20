const mongoose = require('mongoose')

//discriminator est une fct model permet de specifier 
//une cle (exp:"client") et avec cette cle nous pouvons stocker différebts entité  dans une collection 
const userModel = require('./userModel')
const schemaCustomer = new mongoose.Schema({

    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },

})

module.exports = userModel.discriminator('Customer', schemaCustomer)