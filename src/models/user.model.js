const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
        },
    email:{  
        type: String,
        required: true,
        unique: true,
        },
    password:{
        required: true,
        type: String
        },
    avatar:{
        type: String,
        default: "",
    },
    status:{
        type: String,
        enum: ["online", "offline"],
        default: "offline",
    },
    lastSeen:{
        type: Date,
        default: Date.now,
    },
    isActive:{
        type: Boolean,
        default: true,
    },  
},
 {
    timestamps: true,
 }
);

module.exports = mongoose.model('User', userSchema);         s