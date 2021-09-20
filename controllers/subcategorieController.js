const Subcategorie = require('../models/subcategorieModel')
module.exports = {


    // createsubcategorie


    CreateSubcategorie: function(req, res) {

        const newsubcategorie = new Subcategorie({
                name: req.body.name,
                product: req.body.product

            })
            //save user fi database
        newsubcategorie.save((err, subcategorie) => {
            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(201).json({
                    message: ' subcategorie added',
                    status: 201,
                    data: subcategorie
                })
        })
    },


    //getallsubcategorie


    GetALLSubcategorie: function(req, res) {

        Subcategorie.find({}).exec((err, listsubcategorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'subcategorie find',
                    status: 200,
                    data: listsubcategorie
                })
        })
    },

    //get user avec id









    GetSubcategorieById: function(req, res) {
        Subcategorie.findById({ _id: req.params.id }).exec((err, subcategorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'subcategorie find By Id',
                    status: 200,
                    data: subcategorie
                })
        })
    },

    DeleteSubcategorie: function(req, res) {


        Subcategorie.deleteOne({ _id: req.params.id }).exec((err, subcategorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'subcategorie deleted',
                    status: 200,
                    data: subcategorie
                })
        })

    },


    SubcategorieUpdate: function(req, res) {


        Subcategorie.updateOne({ _id: req.params.id }, req.body).exec((err, subcategorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'user update',
                    status: 200,
                    date: subcategorie
                })

        })
    }






}