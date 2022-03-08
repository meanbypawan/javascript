const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("admins",adminSchema);