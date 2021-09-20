const Product = require('../models/productModel')

/*  to upload file :add multer package with destination path*/
const multer = require('multer')
const upload = multer({ dest: __dirname + '/uploads/' }) // dirname t3tina postion mt3 dossier upload
var fs = require("fs") // filesystem permet de lire et ecrire un fichier


//creer product
module.exports = {
    CreateProduct: function(req, res) {

        var file = __dirname + '/uploads/' + req.file.originalname;
        fs.readFile(req.file.path, function(err, data) {

            fs.writeFile(file, data, function(err) {

                if (err) {
                    console.error(err);
                    var response = {
                        message: 'sorry file could not upload',
                        filename: req.file.originalname
                    };
                } else {
                    const newproduct = new Product({
                        name: req.body.name,
                        price: req.body.price,
                        description: req.body.description,
                        image: req.file.originalname

                    })
                    newproduct.save(function(err, data) {
                        if (err) {
                            res.json({
                                status: 'no',
                                msg: 'erreur' + err
                            })
                        } else {
                            res.json(data)
                        }
                    })

                }


            })

        })
    },
    GetALLProduct: function(req, res) {

        Product.find({}).exec((err, listproduct) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'product find',
                    status: 200,
                    data: listproduct
                })
        })
    },

    //get product avec id
    GetProductById: function(req, res) {

        Product.findById({ _id: req.params.id }).exec((err, product) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'product find By Id',
                    status: 200,
                    data: product
                })
        })
    },

    //delete product
    DeleteProduct: function(req, res) {
        Product.deleteOne({ _id: req.params.id }).exec((err, product) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'product deleted',
                    status: 200,
                    data: product
                })
        })
    },

    //Update product
    UpdateProduct: function(req, res) {
        Product.updateOne({ _id: req.params.id }, {
                $set: req.body
            })
            .exec((err, productupdated) => {

                if (err)
                    res.status(500).json({
                        message: err,
                        status: 500
                    })
                else
                    res.status(200).json({
                        message: 'product update',
                        status: 200,
                        data: productupdated
                    })
            })
    },

    UploadImage: function(req, res) {

        var file = __dirname + '/uploads/' + req.file.originalname;

        fs.readFile(req.file.path, function(err, data) {

                fs.writeFile(file, data, function(err) {

                        if (err) {
                            console.error(err);
                            var response = {
                                message: 'sorry file could not upload',
                                filename: req.file.originalname
                            };
                        } else {


                            res.json({ status: 'ok' })

                        }


                    }


                )
            }

        )
    }


}