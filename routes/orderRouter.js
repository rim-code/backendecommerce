const ordercontroller = require('../controllers/orderController')
const route = require('express').Router()




//methode save order
route.post('/add', ordercontroller.CreateOrder)
    //get all order
route.get('/list', ordercontroller.DeleteOrder)
    //get one order
route.get('/getone/:id', ordercontroller.GetOrderById)
    //update
route.put('/update/:id', ordercontroller.OrderUpdate)
    //delete
route.delete('/delete/:id', ordercontroller.DeleteOrder)


module.exports = route