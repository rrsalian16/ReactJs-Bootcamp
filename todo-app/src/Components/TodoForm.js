import React,{useContext, useState} from 'react'

import { ADD_ITEM } from "../Context/action.type";
import todoContext from "../Context/Context";

import { FormGroup, Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

import { v4 } from "uuid";

const TodoForm = () => {

    const [todoString, setTodoString] = useState("");

    const {dispatch} = useContext(todoContext);

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(todoString===""){
            alert("Can't add Empty Todo")
            return;
        }

        const data={
            data:todoString,
            id:v4()
         }

        dispatch({
            key:ADD_ITEM,
            payload: data
        })
        
        setTodoString("")

    }

    return (
      <Form onSubmit={formSubmitHandler}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              id="todo"
              value={todoString}
              onChange={(e) => setTodoString(e.target.value)}
            ></Input>
            <InputGroupAddon>
              <Button>Add</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
}

export default TodoForm
