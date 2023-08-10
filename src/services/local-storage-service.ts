import { dataType } from "../types/DataTypes";
import { TNotesGroup } from "../types/NotesTypes";
import { Task } from "../types/TodoTypes";

class LocalStorageService {
  getLocalStorageData<T>(storageName: dataType): T[] {
    if (!localStorage.getItem(storageName + "_storage"))
      localStorage.setItem(storageName + "_storage", JSON.stringify([]));

    return JSON.parse(localStorage.getItem(storageName + "_storage") as string);
  }

  saveNewData(newTasksArr: Task[] | TNotesGroup[], storageName: dataType) {
    localStorage.setItem(storageName + "_storage", JSON.stringify(newTasksArr));
  }
}

export default new LocalStorageService();
