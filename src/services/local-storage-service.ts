import { Task } from "../types/TodoTypes";

const storageName = "organaizer_storage";

class TodoLocalStorageService {
  getLocalStorageTasks() {
    if (!localStorage.getItem(storageName))
      localStorage.setItem(storageName, JSON.stringify([]));

    return JSON.parse(localStorage.getItem(storageName) as string);
  }

  saveNewTasksArr(newTasksArr: Task[]) {
    localStorage.setItem(storageName, JSON.stringify(newTasksArr));
  }
}

export default new TodoLocalStorageService();
