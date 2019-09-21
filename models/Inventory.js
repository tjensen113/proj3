const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InventorySchema = new Schema({    
    productName: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true
    },
    quantity: {
        type: Number,
        // default: 0
    }
})

module.exports = mongoose.model('Inventory', InventorySchema);