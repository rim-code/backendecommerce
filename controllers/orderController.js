const Order = require('../models/orderModel')
    //creeer order

module.exports = {

    CreateOrder: function(req, res) {

        const neworder = new Order({
                date: req.body.date,
                price: req.body.price
            })
            //saveorder  fi database
        neworder.save((err, order) => {
            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'order added',
                    status: 200,
                    data: order
                })
        })
    },
    //getAll order

    GetALLOrder: function(req, res) {

        Order.find({}).exec((err, listorder) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'order find',
                    status: 200,
                    data: listorder
                })
        })
    },

    //get order avec id
    GetOrderById: function(req, res) {
        Order.findById({ _id: req.params.id }).exec((err, order) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'order find By Id',
                    status: 200,
                    data: order
                })
        })
    },

    //Delete order
    DeleteOrder: function(req, res) {


        Order.deleteOne({ _id: req.params.id }).exec((err, order) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: ' order deleted',
                    status: 200,
                    data: order
                })
        })

    },
    //Update order
    OrderUpdate: function(req, res) {


        Order.updateOne({ _id: req.params.id }, req.body).exec((err, orderupdated) => {

            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(200).json({
                    message: 'orderupdate',
                    status: 200,
                    data: orderupdated
                })

        })
    }


}