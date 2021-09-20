const productController = require('../controllers/productController')
const route = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: __dirname + '/uploads/' })



// méthodes

route.post('/add', upload.single('image'), productController.CreateProduct)

route.get('/list', productController.GetALLProduct)
route.get('/getone/:id', productController.GetProductById)

route.put('/update/:id', upload.single('image'), productController.UpdateProduct)

route.delete('/delete/:id', productController.DeleteProduct)
    //upload image
route.post('/upload', upload.single('image'), productController.UploadImage)



module.exports = route