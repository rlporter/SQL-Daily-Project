const express = require("express");
const router = express.Router();
const models = require("./models");
const app = express();

const todoRouter = require('./routes/todo');
router.get("/", function (req, res) {
    res.redirect("/");
})
//read todos

models.list.findAll().then(function (todo) {
  console.log(todo);
})

//use Sequelize to store your todos
let todo = models.addTodo.create({
  title: req.param.title,
  details: req.param.details,
  created_at: new Date(),
  completed_at: new Date()
});

//add the ability to edit and delete individual todos

//edit
todolist.findbyID.update({
  title: req.params.title,
  details: req.params.details,
  priority: req.params.priority,
  created_at: new Date(),
  completed_at: new Date()
}).then(function (todo){
  alert("Task has been updated.")
});


//delete
todolist.findbyID.destroy({
  where: {
    completed_at: req.param.stillToDo.isNotEmpty,
  }
}).then(function(){
  alert("Completed task deleted!")
});

app.listen(3000, function(){
  console.log("Ready, steady, go...")
});
