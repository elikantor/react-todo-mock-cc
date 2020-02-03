import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {
  
  state = {
    todos: [],
    completed: [],
    incomplete: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/todos")
    .then(r => r.json())
    .then(data => {
      let completedTodos = data.filter(todo=> todo.completed)
      let incompleteTodos = data.filter(todo => !todo.completed)
      this.setState({
        todos: data,
        completed: completedTodos,
        incomplete: incompleteTodos
      })
    })
  }

  addTodo = (event, todo) => {
    event.preventDefault()
    fetch("http://localhost:3000/todos", {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: todo,
        completed: false
      })
    })
    .then(r=>r.json())
    .then(todo => {
      let arr = [...this.state.incomplete, todo]
      let newtodos = [...this.state.todos, todo]
      this.setState({
        todos: newtodos,
        incomplete: arr
      })
    })
  }

  delete = (todo) => {
    if(todo.completed){
      let newCompleted = this.state.completed.filter(todoObj => todoObj.title !== todo.title )
      this.setState({
        completed: newCompleted
      })
    } else {
      let newIncomplete = this.state.incomplete.filter(todoObj => todoObj.title !== todo.title )
      this.setState({
        completed: newIncomplete
      })
    }
  }

  changeStatus = (todo) => {
    todo.completed = !todo.completed
    let newTodos = this.state.todos.filter(todoObj => todoObj.title !== todo.title)
    let newTodos2 = [...newTodos, todo]
    let completedTodos = newTodos2.filter(todo=> todo.completed)
    let incompleteTodos = newTodos2.filter(todo => !todo.completed)
    this.setState({
      completed: completedTodos,
      incomplete: incompleteTodos
    })
  }

  render() {
    return (
      <div id="todo-container">
        <NewToDoForm addTodo={this.addTodo}/>
        <CompletedContainer delete={this.delete} completed={this.state.completed} changeStatus={this.changeStatus}/>
        <IncompleteContainer delete={this.delete} incomplete={this.state.incomplete} changeStatus={this.changeStatus}/>
      </div>
    );
  }
}
