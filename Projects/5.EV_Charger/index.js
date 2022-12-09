require("dotenv").config()
const express = require('express')
const app = express()
const request = require("request");
//Mongoose DB
const bodyParser =require('body-parser')
const mongoose = require('mongoose')
//Passport
const passport = require('passport')
const LocalStrategy = require('passport-local')


const User = require('./helpers/Models')

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.static('helpers'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(
    require("express-session")({
      secret: "TEST", // used to encrypt the user info before saving to db
      resave: false, // save the session obj even if not changed
      saveUninitialized: false, // save the session obj even if not initialized
    })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware to authenticate user when they go to home page
const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
   }


const {DBSRV} = process.env
mongoose.connect(DBSRV, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("connected to the DB")
})
.catch((err)=>{
    console.log('Issues connecting to the DB', err)
} )

app.get("/", (req,res) => {
    res.redirect('home')
})


let endpoint = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&state=TX&limit=200&api_key=C0gHrFk9Qpezmzv2GeGPtDqYQ8VgYpUqvEENDMwN"


app.get("/home", isLoggedIn, (req,res) => {
    request(endpoint, (error, response, body)=>{
    let data =JSON.parse(body)
    function research(){
        for (var i= 0; i<10; i++){
        console.log( data.fuel_stations[i].street_address);
    }}     
    research()
    })

    res.render('home')
})

app.get("/login", (req,res) => {
    res.render('login')
})

//Route to handle login- 
app.post("/login",passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login" 
}),
(req,res) => {
    const {username, password} = req.body
    console.log(username,password)
})

app.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
});

app.get('/register', (req, res) => {
    res.render('register')
})


app.post('/register', (req, res) => {
    // if(!req.body) return res.sendstatus(400)

    var newUser = new User ({
        username: req.body.username,
        email: req.body.email,
    })
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.render("register.ejs", {err : "Opps something went wrong"})
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/home");
            });
        }
    })
})

app.get("/Search", (req,res) => {
    res.send('Search Page connected')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`App is on ${PORT}`))