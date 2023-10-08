const { mongoose } = require("mongoose");
const Pizza = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "the type of the Pizza is required"]
        
    
    },
    size: {
        type: String,
        required: [true, "the size of the Pizza is required"],
       
    },
    note: {
        type: String,
        maxLength: [25, ' Notes must contain max of 25 characters']
    }
},{timestamps: true})
module.exports.PizzaSchema = mongoose.model("PizzaSchema", Pizza)
// ! Go to the Controller ==>