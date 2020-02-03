import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    todo: ""
  }

  updateForm = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={(event)=>this.props.addTodo(event, this.state.todo)}>
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" value={this.state.todo} onChange={this.updateForm}/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
