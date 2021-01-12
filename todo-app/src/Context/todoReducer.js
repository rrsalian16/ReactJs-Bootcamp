
import todoContext from "./Context";
import { ADD_ITEM, REMOVE_ITEM } from "./action.type";

export default (state,action)=>{

    switch (action.key) {
      case ADD_ITEM:
        return [...state, action.payload];

      case REMOVE_ITEM:
        return state.filter(todo=>todo.id!==action.payload);

      default:
        return state;
    }
}

