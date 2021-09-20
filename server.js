const express = require('express')
const cors = require('cors') //pour lire les api front-end
const bodyparser = require('body-parser')
const app = express() //app midellware contient toutes les fonctionalité  et les méthodes qui offre express

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



//appel votre base de donée
const db = require('./config/database')
    //définir les routes 
const userrouter = require('./routes/userRouter')
const customerrouter = require('./routes/customerRouter')

const providerrouter = require('./routes/providerRouter')
const productrouter = require('./routes/productRouter')

const categorierouter = require('./routes/categorieRouter')
const orderrouter = require('./routes/orderRouter')
const subcategorierouter = require('./routes/subcategorieRouter')

//verifier path 

app.use(function(err, req, res, next) {
    console.log(err);
    if (err.status === 404)
        res.status(404).json({ message: "Path Not found " });
    else
        res.status(500).json({ message: "Something looks wrong !!" + err })


});
app.use(cors()) //cors:bech ki te5dem frond yconnectilek 3al back



// parse application/json//pour accepter tous type de fichier(xml....)
app.use(bodyparser.json());
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));



var swaggerOptions = {
    swaggerDefinition: {
        info: {

            servers: ['http://localhost:3200']
        },
        tags: [{
                name: 'user',
                description: 'this tag is for the user services '
            },


        ]
    },
    apis: ['server.js', "./routes/*.js"]
};
var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.set('secretKey', "apibackend") //clé privé de chiffrement

app.use('/api/user', userrouter) //test  postman
app.use('/api/customer', customerrouter)
app.use('/api/provider', providerrouter)
app.use('/api/product', productrouter)
app.use('/api/categorie', categorierouter)
app.use('/api/order', orderrouter)
app.use('/api/subcategorie', subcategorierouter)




//pour run notre application port 3200 
//3000 pour react par defaut 
// 4000 angular 


app.listen(3200, (err) => {
    if (err)
        console.log('erreur de connexion', err)
    else
        console.log('serveur is running 3200')
})