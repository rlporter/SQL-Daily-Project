const express = require("express");
const router = express.Router();
const models = require("./models");
const app = express();

const todoRouter = require('./routes/todo');
router.get("/", function (req, res) {
    res.redirect("/");
})

models.todolist.findAll().then(function (todo) {
  console.log(todo);
})

//use Sequelize to store your todos
let todo = models.Todo.create({
  title: req.param.title,
  details: req.param.details,
  created_at: new Date(),
  completed_at: new Date()
});

//add the ability to edit and delete individual todos

//edit
todolist.findbyID.update({
  title: req.param.title,
  details: req.param.details,
  created_at: new Date(),
  completed_at: new Date()
}).then(function (todo){
  alert("Task has been updated.")
});


//delete
todolist.findbyID.destroy({
  where: {
    completed_at: isNotEmpty,
  }
}).then(function(){
  alert("Completed task deleted!")
});

app.listen(3000, function(){
  console.log("Ready, steady, go...")
});
