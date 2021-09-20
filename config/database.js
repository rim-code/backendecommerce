const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dbecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true, //Deprecation Warnings
}, (err) => {
    if (err)
        console.log('connection failed' + err)
    else
        console.log('db is connected')
})
mongoose.promise = global.promise; //node asynchrone ,promise assure que moongoose marche le premier puis la tache  
module.exports = mongoose