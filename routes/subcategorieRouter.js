const subcategoriecontroller = require('../controllers/subcategorieController')
const route = require('express').Router()




route.post('/add', subcategoriecontroller.CreateSubcategorie)
route.get('/list', subcategoriecontroller.GetALLSubcategorie)
route.get('/getone/:id', subcategoriecontroller.GetSubcategorieById)

route.delete('/delete/:id', subcategoriecontroller.DeleteSubcategorie)
route.put('/update/:id', subcategoriecontroller.SubcategorieUpdate)


module.exports = route