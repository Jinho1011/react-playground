import { CREATE, CHECK, MODIFY, DELETE, Action } from "./actions";

interface Todo {
  id: number;
  todo: string;
  check: boolean;
}

interface State {
  data: Todo[];
}

const initialState: State = {
  data: [],
};

const Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE: {
      const newTodo: Todo = {
        id: Date.now(),
        todo: action.payload.todo,
        check: false,
      };

      return {
        ...state,
        data: [...state.data, newTodo],
      };
    }
    case CHECK: {
      const checkedTodos = state.data.map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            check: !todo.check,
          };
        else return todo;
      });

      return {
        ...state,
        data: checkedTodos,
      };
    }
    case MODIFY: {
      const modifiedTodos = state.data.map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            todo: action.payload.todo,
          };
        else return todo;
      });

      return {
        ...state,
        data: modifiedTodos,
      };
    }
    case DELETE: {
      const deletedTodos = state.data.filter(
        (todo) => todo.id !== action.payload.id
      );

      return {
        ...state,
        data: deletedTodos,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
