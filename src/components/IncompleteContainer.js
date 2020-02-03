import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

  state = {
    searchText: ""
  }

  search = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    let arr = this.props.incomplete.filter(todo=> todo.title.includes(this.state.searchText))
    let newArr = arr.map(todo=> <ToDoCard todo={todo} delete={this.props.delete} key={todo.title} changeStatus={this.props.changeStatus}/>)
    return (
        <div>
            <h1>Incomplete Todos</h1>
            {<SearchBarComponent onChange={this.search} searchValue={this.state.searchText} />}
            {newArr} 
        </div>
    )
  }
}

    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    // state = {
    //     searchTerm: ""
    // }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    // handleOnChange = () => {
        
    // }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.
