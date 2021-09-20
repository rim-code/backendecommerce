const mongoose = require('mongoose')

const schemaCategorie = new mongoose.Schema({

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        }

    }

)
module.exports = mongoose.model('Categorie', schemaCategorie)