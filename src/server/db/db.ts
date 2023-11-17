import connection from './connections';
import { Task } from '../../models/Task';

export async function getTasks(db = connection) {
  return (await db('tasks').select()) as Task[];
}

export async function addTask(task: Task, db = connection) {
  return db('tasks').insert(task);
}

export async function updateTask(id: Number, task: Task, db = connection) {
  return await db('tasks');
}

export function deleteTask(id: number, db = connection) {
  return db('tasks').where('id', id).del();
}
