export interface Todo {
  id: number;
  todo: string;
  check: boolean;
}

export interface TodoState {
  data: Todo[];
}
