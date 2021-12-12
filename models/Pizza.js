const { Schema, model } = require('mongoose');
const pizzaSchema = new Schema({
    pizzaName :{
        type:String
    },
    createdBy: {
        type :String
    }, 
    createdAt:{
        type:Date,
        default:Date.now
    },
    size:{
        type:String,
        default:'large'
    },
    toppings :[]
});

const Pizza  = model('Pizza',pizzaSchema);
module.exports ={Pizza};