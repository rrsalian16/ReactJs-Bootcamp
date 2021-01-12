import React from 'react'

import todoContext from "../Context/Context";
import { REMOVE_ITEM } from "../Context/action.type";
import { useContext } from "react";

import { ListGroup,ListGroupItem } from "reactstrap";

import { FaCheckDouble } from "react-icons/fa";

const TodoList = () => {

    const {todos, dispatch} = useContext(todoContext);

    return (
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem id={todo.id} className="item">
            {todo.data}
            <span
              className="float-right"
              onClick={() => {
                dispatch({
                  key: REMOVE_ITEM,
                  payload: todo.id,
                });
              }}
            >
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
}

export default TodoList
