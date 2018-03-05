import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <input type="text" className="form__input" 
                placeholder="Add todo" onChange={this.props.handleChange} value={this.props.todoValue}/>
                <button className="form__button" type="submit" onClick={this.props.handleClick}>╋</button>
                <Todo todos={this.props.todos} handleToggle={this.props.handleToggle} 
                handleDelete={this.props.handleDelete}/>
            </form>
        )
    }
}

class Todo extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="example" component="ul" className="todos-list">
                {
                    this.props.todos.map((item) => {
                        return (
                            <li className="todo-item" key={item.id} onClick={() => this.props.handleToggle(item.id)}>
                                <span className={item.done ? "todo-item__name disabled" : "todo-item__name"}>{item.text}</span>
                                <span className="todo-item__delete-button" onClick={() => this.props.handleDelete(item.id)}>×</span>
                            </li>
                        )
                    })
                }
            </ReactCSSTransitionGroup>
        )
    }
}

export default Form;