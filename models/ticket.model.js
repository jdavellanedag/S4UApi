const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String },
    priority: {
        text: { type: String },
        code: { type: String }
    },
    status: {
        text: { type: String },
        code: { type: String }
    },
    type: {
        text: { type: String },
        code: { type: String }
    },
    category: {
        text: { type: String },
        code: { type: String }
    },
    /*  
        User schema not implemented
        
        userOwner: { type: Schema.Types.ObjectId, ref: 'User' },
        userAssinged: { type: Schema.Types.ObjectId, ref: 'User' } */
});

module.exports = mongoose.model('Ticket', ticketSchema);