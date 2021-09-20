const mongoose = require('mongoose')

const schemaOrder = new mongoose.Schema({

        date: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        }

    }

)
module.exports = mongoose.model('Order', schemaOrder)