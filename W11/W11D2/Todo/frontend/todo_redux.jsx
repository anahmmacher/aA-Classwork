import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import { receiveTodos } from './actions/todo_actions'
import { receiveTodo } from './actions/todo_actions'
import { removeTodo } from './actions/todo_actions'
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.store = store
    window.receiveTodos = receiveTodos
    window.receiveTodo = receiveTodo
    window.removeTodo = removeTodo
    ReactDOM.render(<h1>hellooooooo</h1>, root)
})