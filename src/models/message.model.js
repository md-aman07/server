const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        chat:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
            required: true,
        },
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text:{
            type: String,
            trim: true,
            default: "",
        },
        attachments:[
            {
                type: String,   
            }
        ],
        status:{
            type: String,
            enum: ["sent", "delivered", "seen"],
            default: "sent",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Message', messageSchema);