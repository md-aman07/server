const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        participants:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            }
        ],
        type:{
            required: true,
            type: String,
            enum: ["private", "group"],
            default: "private",
        },
        lastMessage:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: null,
        },
        isCreated_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Chat', chatSchema);