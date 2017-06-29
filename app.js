

const list = [
  {todo: "Wash the car", stillToDo: true},
  {todo: "Buy milk", stillToDo: true},
  {todo: "Walk the dog", stillToDo: false}
];

const data = {todos: list};

const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");
const app = express();

app.use(express.static("./"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");


app.get("/", function (req, res) {
  res.render('index', data);
});

app.post("/", function (req, res) {
  list.push({todo:req.body.addTodo, stillToDo: true});
  res.redirect('/');
});

app.post("/complete", function (req, res) {
  let completed = req.body.markComplete;
  function findTodo(item){
    return item.todo === completed;
  list.find(findTodo).stillToDo = false;
  }
  res.redirect('/');
});

app.listen(3000, function(){
  console.log("Successfully started express application.")
});
