const customercontroller = require('../controllers/customerController')
const route = require('express').Router()



//methode save customer
route.post('/add', customercontroller.CreateCustomer)
    //get alluser
route.get('/list', customercontroller.GetALLCustomer)
    //get one user
route.get('/getone/:id', customercontroller.GetCustomerById)
    //update
route.put('/update/:id', customercontroller.UpdateCustomer)
    //delete
route.delete('/delete/:id', customercontroller.DeleteCustomer)


module.exports = route