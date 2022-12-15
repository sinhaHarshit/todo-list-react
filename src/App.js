
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useState } from 'react'
import Additem from './components/Additem';



function App() {
  const onDelete = (todo) => {
    console.log("Deleting this item", todo.title)

    setTodos(todos.filter((t) => {
      return t !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "TODO 1",
      desc: "This is the Description of TODO 1"
    },
    {
      sno: 2,
      title: "TODO 2",
      desc: "This is the Description of TODO 2"
    },
    {
      sno: 3,
      title: "TODO 3",
      desc: "This is the Description of TODO 3"
    }
  ]);

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
