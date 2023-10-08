const mongoose = require("mongoose")


const DBName = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27017/${DBName}`)
    .then(() => { console.log(`Establish connection to the database ${DBName} ✅✅✅`) })
    .catch((err) => { console.log('Somthing went wrong', err) })