const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const home = require("./routes/home");

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const url = process.env.url;


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('../HTML'))

app.use(express.static('../testVercel1'))

app.use(express.static('HTML'));

const User = require('./models/user');


app.post("/signup", function (req, res) {
    console.log(req.body.firstname)
    console.log(req.body.lastname)
    console.log(req.body.phonenumber)
    console.log(req.body.emailID)
    console.log(req.body.passwordID)

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        emailID: req.body.emailID,
        passwordID: req.body.passwordID
    });

    user.save()
        .then((user) => {
            console.log(user)
            res.redirect('dashboard.html');
            res.end("")


        })
        .catch((err) => {
            console.log(err);
            res.redirect('error.html')

        })

});

app.post("/login", function (req, res) {
    var emailID = req.body.emailID;
    var passwordID = req.body.passwordID;

    console.log(emailID);
    console.log(passwordID);


    User.findOne({ emailID: emailID, passwordID: passwordID }, function (err, user) {

        if (err) {
            console.log(err);

        }
        if (!user) {
            return res.redirect('error2.html');


        }
        else if (user) {
            return res.redirect('dashboard.html');
        }
    })


});


app.use("/home", home);



app.get("/signup", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('signup.html');

});

app.get("/login", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('login.html');

});

app.listen(3000);
console.log("listening on port 3000")

module.exports = app