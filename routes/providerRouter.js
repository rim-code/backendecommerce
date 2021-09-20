const providercontroller = require('../controllers/providerController')
const route = require('express').Router()



//methode saveprovider
route.post('/add', providercontroller.CreateProvider)
    //get allprovider
route.get('/list', providercontroller.GetALLProvider)
    //get one provider
route.get('/getone/:id', providercontroller.GetProviderById)
    //update
route.put('/update/:id', providercontroller.UpdateProvider)
    //delete
route.delete('/delete/:id', providercontroller.DeleteProvider)


module.exports = route