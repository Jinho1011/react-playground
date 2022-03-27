export const CREATE = "CREATE";
export const CHECK = "CHECK";
export const MODIFY = "MODIFY";
export const DELETE = "DELETE";

export const createTodo = (todo: string) => {
  return { type: CREATE, payload: { todo } } as const;
};

export const checkTodo = (id: number) => {
  return { type: CHECK, payload: { id } } as const;
};

export const modifyTodo = (id: number, todo: string) => {
  return { type: MODIFY, payload: { id, todo } } as const;
};

export const deleteTodo = (id: number) => {
  return { type: DELETE, payload: { id } } as const;
};

export type Action =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof checkTodo>
  | ReturnType<typeof modifyTodo>
  | ReturnType<typeof deleteTodo>;
