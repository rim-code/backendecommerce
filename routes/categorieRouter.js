const categoriecontroller = require('../controllers/categorieController')
const route = require('express').Router()




//methode save categorie
route.post('/add', categoriecontroller.CreateCategorie)
    //get allcategorie

route.get('/list', categoriecontroller.GetALLCategorie)
    //get one user
route.get('/getone/:id', categoriecontroller.GetCategorieById)
    //update
route.put('/update/:id', categoriecontroller.CategorieUpdate)
    //delete
route.delete('/delete/:id', categoriecontroller.DeleteCategorie)


module.exports = route