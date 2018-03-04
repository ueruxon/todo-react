import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Todo from './components/todo.js';




const App = () => {
    return (
        <div className="container">
            <Header />
            <Todo />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("todo"))