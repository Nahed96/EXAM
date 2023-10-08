const { PizzaSchema } = require("../models/model")


//!-------- CRUD

//? Read All


module.exports.findAllPizza = (req, res) => {
    
    PizzaSchema.find()
        .then((AllPizza) => {
            res.json({ AllPizza })
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏" }) })
}

//? CREATE
module.exports.createNewPizza = (req, res) => {

    PizzaSchema.create(req.body)
        .then(CreatePizza => {
            console.log(CreatePizza)
            res.status(200).json({ CreatePizza})
        })
        .catch(err => { res.status(400).json(err) })


}

// Delete

module.exports.deletePizza = (req, res) => {
    PizzaSchema.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}