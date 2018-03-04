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

    handleToggle = (id) => {
        this.setState((prevState) => {
            todos : prevState.todos.map(item => {
                item.id == id ? item.done = !item.done : item.done;
            })
        })
    }

    render() {
        return (
            <form className="form">
                <input type="text" className="form__input" 
                placeholder="Add todo" onChange={this.handleChange} value={this.state.todoValue}/>
                <button className="form__button" type="submit" onClick={this.handleClick}>╋</button>
                <Todo todo={this.state.todos} handleToggle={this.handleToggle} />
            </form>
        )
    }
}

class Todo extends React.Component {
    render() {
        return (
            <ul className="todos-list">
                {
                this.props.todo.map((item) => {
                    return (
                        <li className="todo-item" key={item.id} onClick={() => this.props.handleToggle(item.id)}>
                            <span className={item.done ? "todo-item__name--disabled" : "todo-item__name"}>{item.text}</span>
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