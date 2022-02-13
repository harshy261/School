const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userSchema')
const port = process.env.PORT || 5000;
const app = express();
const path = require('path');


const DB = 'mongodb+srv://contact:contact@cluster0.rjun5.mongodb.net/mern?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => console.log(err));


// Public Static Path
const static_path = path.join(__dirname, "./public");





 

/* ROUTING */


app.use(express.static(static_path));



app.get("/", (req,res)=> {
    res.send("index");
}) 
app.get("/", (req,res)=> {
    res.send("index");
}) 

app.post("/", async(req,res)=> {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.bulkSave();
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(err);
    }
})


app.use(express.urlencoded({extended:false}))  







/* CREATE SERVER */
app.listen(port, ()=> {
    console.log(`Server is listening at port no. ${port}`);
})




