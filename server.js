
// require("dotenv").config()
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override');


// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// app.use(express.static("public"));
app.use(methodOverride('_method'))


app.use("/todo", require("./controllers/todo_controller"));


// // Create a second route.
// app.get('/', function (req, res) {
//     res.send('hello!')
// })

// Listen for connections.
app.listen(3000, function () {
    console.log('I am awake!')
})

// app.get("/", (req, res) => {
    // res.render("Main");
//   });

