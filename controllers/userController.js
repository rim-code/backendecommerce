const User = require('../models/userModel')

const jwt = require('jsonwebtoken') //c'est un jeton permettant d'echanger des informations de maniere 
    //securise compose de 3 partie header payload (contient des infos supplimentaire )
    //et signature 
const bcrypt = require('bcryptjs')


//creeer user

module.exports = {

    CreateUser: function(req, res) {

        const newuser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone


            })
            //save user fi database
        newuser.save((err, user) => {


            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(201).json({
                    message: 'user added',
                    status: 201,
                    data: user
                })
        })
    },
    //getAll users

    GetALLUser: function(req, res) {

        User.find({}).exec((err, listusers) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'user find',
                    status: 200,
                    data: listusers
                })
        })
    },

    //get user avec id
    GetUserById: function(req, res) {
        User.findById({ _id: req.params.id }).exec((err, user) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'user find By Id',
                    status: 200,
                    data: user
                })
        })
    },

    //Delete user
    DeleteUser: function(req, res) {


        User.deleteOne({ _id: req.params.id }).exec((err, user) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'user deleted',
                    status: 200,
                    data: user
                })
        })

    },
    //Update user
    UserUpdate: function(req, res) {


        User.updateOne({ _id: req.params.id }, req.body).exec((err, userupdated) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'user update',
                    status: 200,
                    data: userupdated
                })

        })
    },



    authenticate: function(req, res) {
        User.findOne({ email: req.body.email },
            function(err, userInfo) {
                if (err) {
                    console.log(err)
                } else {
                    if (bcrypt.compare(req.body.password, userInfo.password)) {
                        const token = jwt.sign({ id: userInfo._id },
                            req.app.get('secretkey'), {
                                expiresIn: '1 h'
                            })
                        res.json({
                            status: 'succes',
                            message: 'userfound',
                            data: { user: userInfo, token: token }
                        })
                    } else {
                        res.json({
                            status: 'error',
                            message: 'invalid email or password',
                            data: null
                        })
                    }
                }
            })

    }











}