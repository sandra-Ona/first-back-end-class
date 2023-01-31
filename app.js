require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT= 3000;
mongoose.set("strictQuery", true);
const employeeRouter= require('./routes/employeeRouter');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(employeeRouter);

app.get("/create", (req, res) =>{
    res.status(200).render("create");
});

//database connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, () =>{
        console.log(`server running on ${PORT}`);
    });
})
.catch((err) =>{
console.log(err);
});

