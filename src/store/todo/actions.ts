export const CREATE = "CREATE";
export const CHECK = "CHECK";
export const MODIFY = "MODIFY";
export const DELETE = "DELETE";

export const createTodo = (todo: string) => {
  return { type: CREATE, todo };
};

export const checkTodo = (id: number) => {
  return { type: CHECK, id };
};

export const modifyTodo = (id: number, todo: string) => {
  return { type: MODIFY, id, todo };
};

export const deleteTodo = (id: number) => {
  return { type: DELETE, id };
};
