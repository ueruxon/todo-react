import React from 'react';

class Header extends React.Component {
    
    render() {
        return (
            <header className="header">
                <h1>Todo List (React only)</h1>
                <h3>All To-Do {this.props.countTodo}</h3>
            </header>
        )
    }
}

export default Header;