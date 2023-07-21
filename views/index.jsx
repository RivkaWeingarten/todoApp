// - `require('react')` at the top of your file, and create a function called `Main` or `Home`, or whatever you like.
// - Your function will take in one parameter -- this will be an object that contains `tasks` and `complete` keys.
// - Start testing by just showing your lists of tasks. Use `.map()`! Then add functionality to complete or delete tasks.
// - Don't forget to `module.exports` your function!
const React = require("react");
// const data = require("../models/data");
const Def = require("./default");
// import style from "public\css\style.css"
function Main({ tasks, complete }) {
  return (
    <Def>
      <div className="form" id="form">
        <h1>A Simple To Do App</h1>
        <div className="new-form">
          <form method="POST" action="/todo">
            <div className="form-group">
              <label htmlFor="tasks">Enter Task</label>
              <input
                className="form-control"
                id="toDo"
                name="toDo"
                placeholder="Add to do  here"
                required
              />
            </div>

            <button
              className="btn btn-primary align-items-center"
              type="submit"
            >
              Add To Do
            </button>
          </form>

          <div className="todos" id="todos">
            <ul>{toDoList(tasks)}</ul>

            <button
              className="btn btn-primary align-items-center"
              type="submit"
            >
              Completed
            </button>

            <h2>Completed Tasks</h2>
            <div className="completed" id="completed">
              <ul>{doneList(complete)}</ul>
            </div>
          </div>
        </div>
      </div>
    </Def>
  );
}

function toDoList(tasks) {
  return tasks.map((task) => {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={task}
          name={task}
          value="something"
        />
        <label className="form-check-label" htmlFor="todo">
          {task}
        </label>
      </div>
    );
  });
}

function doneList(complete) {
  return complete.map((done) => {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={done}
          name={done}
          value="something"
          checked
        />
        <label className="form-check-label" htmlFor="todo">
          {done}
        </label>
      </div>
    );
  });
}
module.exports = Main;
