import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoValue: "",
            todos: [],
        }
    }

    handleChange = (event) => {
        this.setState({
            todoValue: event.target.value,
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.todoValue !== "") {
            const todo = {
                id: Date.now(),
                text: this.state.todoValue,
                done: false,
            }
            this.setState({
                todoValue: "",
                todos: [todo, ...this.state.todos]
            })
        }
    }

    render() {
        return (
            <form className="form">
                <input type="text" className="form__input" 
                placeholder="Add todo" onChange={this.handleChange} value={this.state.todoValue}/>
                <button className="form__button" type="submit" onClick={this.handleClick}>╋</button>
                <Todo todo={this.state.todos}/>
            </form>
        )
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            done: this.props.done,
        }
    }

    handleToggle = () => {
        console.log(this.state);
        
    }

    render() {
        return (
            <ul className="todos-list">
                {
                    this.props.todo.map((item) => {
                        return (
                            <li className="todo-item" key={item.id} onClick={this.handleToggle}>
                                <span className="todo-item__name">{item.text}</span>
                                <span className="todo-item__delete-button">×</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}


export default Form;