const Provider = require('../models/providerModel')



//creer provider
module.exports = {

    CreateProvider: function(req, res) {

        const newprovider = {
            company: req.body.company,
            matricule: req.body.matricule,
            service: req.body.service,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone

        }

        Provider.create(newprovider, (err, provider) => {
            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'provider added',
                    status: 200,
                    data: provider
                })

        })
    },
    //getAll providers

    GetALLProvider: function(req, res) {

        Provider.find({}).exec((err, listprovider) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'provider find',
                    status: 200,
                    data: listprovider
                })
        })
    },

    //get provider avec id
    GetProviderById: function(req, res) {

        Provider.findById({ _id: req.params.id }).exec((err, provider) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'provider find By Id',
                    status: 200,
                    data: provider
                })
        })
    },

    //delete provider
    DeleteProvider: function(req, res) {
        Provider.deleteOne({ _id: req.params.id }).exec((err, provider) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'provider deleted',
                    status: 200,
                    data: provider
                })
        })
    },

    //Update provider
    UpdateProvider: function(req, res) {
        Provider.updateOne({ _id: req.params.id },
            req.body).exec((err, providerupdated) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'provider update',
                    status: 200,
                    data: providerupdated
                })
        })
    },


}