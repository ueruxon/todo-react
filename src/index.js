import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Todo from './components/todo.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoValue: "",
            filterType: "All",
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
                todos: [todo, ...this.state.todos],
            })
        }
    }

    handleToggle = (id) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map((item, i) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            done: !prevState.todos[i].done,
                        }
                    }
                    return item;
                })
            }
        })
    }

    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }

    deleteCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(item => !item.done)
        })
    }

    getVisibleTodos = () => {
        const filterType = this.state.filterType;
        let filterState = null;
        switch (filterType) {
            case "Complited":
                return filterState = this.state.todos.filter(item => item.done);
            case "Active":
                return filterState = this.state.todos.filter(item => !item.done);
            default:
                return filterState = this.state.todos;
        }
    }

    setActiveFilter = (text) => {
        this.setState({
            filterType: text,
        })
    }

    render() {
        return (
            <div className="container">
                <Header countTodo={this.state.todos.length}/>
                <Todo handleDelete={this.handleDelete} handleToggle={this.handleToggle}
                    handleClick={this.handleClick} handleChange={this.handleChange} 
                    todoValue={this.state.todoValue} todos={this.getVisibleTodos()}/>
                <Footer setActiveFilter={this.setActiveFilter} 
                    deleteCompleted={this.deleteCompleted} filter={this.state.filterType}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("todo"))