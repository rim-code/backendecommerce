const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
SALT_WORK_FACTOR = 10;
const schemaUser = new mongoose.Schema({

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: function validateEmail(v) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                        return true
                    } else {
                        return false
                    }
                }
            }

        },

        password: {
            type: String,
            required: true,
            validate: {
                validator: function validatePassword(v) {
                    if (/^[A-Za-z]\w{7,14}$/.test(v)) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        },

        phone: {
            type: Number,
            required: true,
            validate: {
                validator: function validatePhone(v) {
                    if (/^\d{8}$/.test(v)) {
                        return true
                    } else {
                        console.log('you are enterred invalid phone');
                        return false
                    }
                }
            }
        }

    }


)

//Mongoose password hashing,(pre,gensalt,hash)methodes express
schemaUser.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcryptjs.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcryptjs.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});










//schemaUser.pre("save", function(next) {
//this.password = bcrypt.hashSync(this.password, 10);
//next()
//})


module.exports = mongoose.model('User', schemaUser)