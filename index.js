const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded( {extended: true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const { v4: uuidv4 } = require('uuid');


//Database
let scribes = [
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    },
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    },
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    },
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    },
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    },
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    },
    {
        id: uuidv4(),
        title: "Good Day",
        description: "Evorything is okay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis pariatur saepe magnam sapiente aspernatur modi sequi ipsam omnis voluptatibus, adipisci, tempora quidem autem! Libero eaque nam adipisci mollitia dicta!",
        date: "25/02/2006"
    }
]

const port = 8080;
app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`);
})


//Check
app.get("/", (req, res) => {
    res.send("working well!")
})


//home
app.get("/home", (req, res) => {
    res.render("index.ejs", {scribes});
})


//Create New Scribe
app.get("/home/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/home", (req,res) => {
    let {title, description, date} = req.body;
    let id = uuidv4();
    scribes.push({id, title, description, date});
    res.redirect("/home");
})


//See More
app.get("/home/:id", (req, res) => {
    let {id} = req.params;
    let scribe = scribes.find( (sc) => id === sc.id);
    res.render("show.ejs", {scribe});
})


//Update
var methodOverride = require('method-override')
app.use(methodOverride('_method'))


app.patch("/home/:id", (req, res) => {
    let {id} = req.params;
    let scribe = scribes.find( (sc) => id === sc.id);
    let newDescription = req.body.description;
    scribe.description = newDescription;
    res.redirect("/home");
})

app.get("/home/:id/edit", (req, res) => {
    let {id} = req.params;
    let scribe = scribes.find( (sc) => id === sc.id);
    res.render("edit.ejs", {scribe});
})


//Delete
app.delete("/home/:id", (req,res) => {
    let {id} = req.params;
    scribes = scribes.filter( (sc) => id !== sc.id);
    res.redirect("/home");
})

