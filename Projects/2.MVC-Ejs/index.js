const express = require("express");
const app = express();

app.use(express.static("assets"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./services/mongoConnection')()

app.get("/", (req, res) => res.render("home.ejs"));

const deleteRoutes = require('./routes/deleteRoute')
const createRoutes = require('./routes/createRoutes')
const updateRoutes = require('./routes/updateRoutes')
const readRoutes = require('./routes/readRoutes')


app.use('/delete', deleteRoutes)
app.use("/create", createRoutes)
app.use('/update', updateRoutes)
app.use('/read', readRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Book app on port ${PORT}`));

