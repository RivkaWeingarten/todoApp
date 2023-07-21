const router = require("express").Router();
const Data = require("../models/data");

router.get("/", function (req, res) {
  // This gets sent to the client
  // (your web browser most likely!)
  res.render("index", { tasks:Data.tasks,complete:Data.complete });
});

router.post("/", (req, res) => {
  Data.tasks.push(req.body);
  res.redirect("/todo" );
});


module.exports = router;
