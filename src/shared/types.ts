export interface TodoProps {
  input: string;
  complete: boolean;
}

export interface TodosProps {
  todos: TodoProps[];
}
