const express = require('express');

const { db } = require('./database/connection')
const  User  = require ('./database/user')

const app = express();

//console.log(db)

// Create a new user
// const jane =  User.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);

const createJane = async (f,l) => {
    const test = await User.create({firstName:f, lastName:l});
    console.log(test)
}
createJane('travis','scott')

const PORT = 5000 || process.env.PORT
app.listen(PORT, ()=> console.log(`server listening on ${PORT}`))
