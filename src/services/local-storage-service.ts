import { dataPossibleTypes, dataType } from "../types/DataTypes";

class LocalStorageService {
  getLocalStorageData<T>(storageName: dataType): T[] {
    if (!localStorage.getItem(storageName + "_storage"))
      localStorage.setItem(storageName + "_storage", JSON.stringify([]));

    return JSON.parse(localStorage.getItem(storageName + "_storage") as string);
  }

  saveNewData(newTasksArr: dataPossibleTypes[], storageName: dataType) {
    localStorage.setItem(storageName + "_storage", JSON.stringify(newTasksArr));
  }
}

export default new LocalStorageService();
