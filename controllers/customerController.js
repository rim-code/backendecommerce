const Customer = require('../models/customerModel')

//creer customer
module.exports = {

    CreateCustomer: function(req, res) {

        const newcustomer = {
            address: req.body.address,
            city: req.body.city,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone

        }

        Customer.create(newcustomer, (err, customer) => {
            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'customer added',
                    status: 200,
                    data: customer
                })

        })
    },
    //getAll customers

    GetALLCustomer: function(req, res) {

        Customer.find({}).exec((err, listcustomers) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'customer find',
                    status: 200,
                    data: listcustomers
                })
        })
    },

    //get customer avec id
    GetCustomerById: function(req, res) {

        Customer.findById({ _id: req.params.id }).exec((err, customer) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'customer find By Id',
                    status: 200,
                    data: customer
                })
        })
    },

    //delete customer
    DeleteCustomer: function(req, res) {
        Customer.deleteOne({ _id: req.params.id }).exec((err, customer) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'customer deleted',
                    status: 200,
                    data: customer
                })
        })
    },

    //Update customer
    UpdateCustomer: function(req, res) {
        Customer.updateOne({ _id: req.params.id },
            req.body).exec((err, customerupdated) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'customer update',
                    status: 200,
                    data: customerupdated
                })
        })
    },


}