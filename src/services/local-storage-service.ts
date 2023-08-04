import { Task } from "../types/TodoTypes";

type storageName = "todo_storage" | "notes_storage";

class LocalStorageService {
  getLocalStorageData<T>(storageName: storageName): T[] {
    if (!localStorage.getItem(storageName))
      localStorage.setItem(storageName, JSON.stringify([]));

    return JSON.parse(localStorage.getItem(storageName) as string);
  }

  saveNewData(newTasksArr: Task[] | NotesGroup[], storageName: storageName) {
    localStorage.setItem(storageName, JSON.stringify(newTasksArr));
  }
}

export default new LocalStorageService();
