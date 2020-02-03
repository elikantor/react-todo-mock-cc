import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    let todos = props.completed.map(todo=> <ToDoCard delete={props.delete} todo={todo} key={todo.title} changeStatus={props.changeStatus}/>)
    return (
        <div>
            <h1>Completed Todos</h1>
            {todos}
             {/* Which Array method can you use? */}
        </div>
    )
}

export default CompletedContainer