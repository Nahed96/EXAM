const PizzaControllers = require("../controllers/controller")

console.log(PizzaControllers)


module.exports = (app) => {
    app.get("/api/pizza", PizzaControllers.findAllPizza)
    app.post("/api/pizza", PizzaControllers.createNewPizza )
    app.delete("/api/pizza/:id", PizzaControllers.deletePizza )
}