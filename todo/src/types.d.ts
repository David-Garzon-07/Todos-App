export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoTitle {
  title: string; // Tipo para representar el título de un todo
}
export type ListOfTodos = Todo[];
