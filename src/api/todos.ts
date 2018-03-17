import { Todo } from "../types";

const scuttlekit: any = 1;

export async function addTodo(todo: Todo): Promise<void> {
  const db: any = await scuttlekit.openDb();
  await db.insert("todos", {
    todo
  });
}

export async function updateTodo(todo: Partial<Todo>) {
  const db: any = await scuttlekit.openDb();
  await db.update(todo);
}

export async function getTodos(list: string) {
  const db: any = await scuttlekit.openDb();
  const todos = db.query("SELECT * FROM todos WHERE todos.list = $list", {
    $list: list
  });
}

export async function completeTodo(id: string) {
  const db: any = await scuttlekit.openDb();
  db.update({ id, completed: true });
}

export async function deleteTodo(id: string) {
  const db: any = await scuttlekit.openDb();
  db.del(id);
}
