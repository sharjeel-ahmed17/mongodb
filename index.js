// import express from "express"
// import mongoose from "mongoose"
// import dotenv from "dotenv"
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const app = express()


const PORT = process.env.PORT || 7000

const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(() => {
    console.log('database is connected successfully');
    app.listen(PORT, () => {
        console.log('server is running on port ', PORT);

    })

}).catch((error) => {
    console.log('error', error);

})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const UserMOdel = mongoose.model('User', userSchema);
app.get('/getUsers', async (req, res) => {
    const usersData = await UserMOdel.find();
    res.send(usersData);
})





// mongoose.connect(MONGOURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log("DB Connected")
// }).catch((err) => {
//     console.log(err)
// })
