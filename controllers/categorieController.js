const Categorie = require('../models/categorieModel')
    //creeer categorie

module.exports = {

    CreateCategorie: function(req, res) {

        const newcategorie = new Categorie({
                title: req.body.title,
                description: req.body.description
            })
            //save categorie  fi database
        newcategorie.save((err, categorie) => {
            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'categorie added',
                    status: 200,
                    data: categorie
                })
        })
    },
    //getAll categorie

    GetALLCategorie: function(req, res) {

        Categorie.find({}).exec((err, listcategorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'categorie find',
                    status: 200,
                    data: listcategorie
                })
        })
    },

    //get categorie avec id
    GetCategorieById: function(req, res) {
        Categorie.findById({ _id: req.params.id }).exec((err, categorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'categorie find By Id',
                    status: 200,
                    data: categorie
                })
        })
    },

    //Delete categorie
    DeleteCategorie: function(req, res) {


        Categorie.deleteOne({ _id: req.params.id }).exec((err, categorie) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: ' categorie deleted',
                    status: 200,
                    data: categorie
                })
        })

    },
    //Update  categorie
    CategorieUpdate: function(req, res) {


        Categorie.updateOne({ _id: req.params.id }, req.body).exec((err, categorieupdated) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'categorieupdate',
                    status: 200,
                    data: categorieupdated
                })

        })
    }


}