import React,{useReducer} from 'react';

import todoContext from "./Context/Context";
import todoReducer from "./Context/todoReducer";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList"


const App=()=>{

    const [todos, dispatch] = useReducer(todoReducer,[])

    return(
        <todoContext.Provider value={{todos, dispatch}}>
            <TodoList />
            <TodoForm />
        </todoContext.Provider>
    );
}

export default App;
