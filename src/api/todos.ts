import { Todo } from "../types";
import { sdk } from "./scuttlekit";

export async function createList(list: any): Promise<void> {
  const db = sdk().getService("sqlite");
  const key = createKey(["alice", "bob", "carol"]);
  db.insert("permission", "edit-", )
  db.insert(list, )
  scuttlekit.publishWithKey(list);

  db.insert("list", list);
}

export async function addTodo(todo: Todo): Promise<void> {
  const db = sdk().getService("sqlite");
  await db.insert("todos", {
    todo
  });
}

export async function updateTodo(todo: Partial<Todo>) {
  const db: any = await scuttlekit.openDb();
  await db.update("todos", todo);
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
