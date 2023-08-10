import localStorageService from "../services/local-storage-service";
import { dataType } from "../types/DataTypes";
import { TNotesGroup } from "../types/NotesTypes";
import { Task } from "../types/TodoTypes";

// export default function getNonActualData(
//   dataType: dataType
// ): Task[] | NotesGroup[] {
//   const dataArr = localStorageService.getLocalStorageData<
//     NotesGroup | Task
//   >(dataType);
//   const filteredDataArr = dataArr.filter((elem) => {
//     if (!elem.actualData) return true;
//     return false;
//   });

//   return filteredDataArr;
// }
