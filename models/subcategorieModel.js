const mongoose = require('mongoose')



const schemaSubcategorie = new mongoose.Schema({


    name: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: String,
        required: true,
        trim: true
    }


})


module.exports = mongoose.model('Subcategorie', schemaSubcategorie)