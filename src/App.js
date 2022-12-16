
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react'
import Additem from './components/Additem';



function App() {
  //retreiving todos from local storage
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //onDelete function deletes current todo item
  const onDelete = (todo) => {
    console.log("Deleting this item", todo)

    setTodos(todos.filter((t) => {
      return t !== todo;
    }))
    //saving todos to local storage IN json form
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) => {
    if (title && desc) {
      let sno;
      if (todos.length == 0) {
        sno = 1
      }
      else {
        sno = todos[todos.length - 1].sno + 1;
      }

      const newTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todos, newTodo]);
      console.log(newTodo)
    }
  }
  useEffect(() => {
    //saving todos to local storage IN json form
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="Todo List" />
      <Additem addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
