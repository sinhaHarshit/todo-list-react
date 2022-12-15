import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">List of things I need to do: </h3>

            {props.todos.length===0? "No todo items to display" : props.todos.map((todoitem)=>{
                return <TodoItem todo={todoitem} key={todoitem.sno} onDelete={props.onDelete}/>
            })}
            
        </div>
    )
}

export default Todos
