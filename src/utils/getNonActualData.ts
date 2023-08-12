import localStorageService from "../services/local-storage-service";
import { dataType } from "../types/DataTypes";
import { dataPossibleTypes } from "../types/DataTypes";

export default function getNonActualData(
  dataType: dataType
): dataPossibleTypes[] {
  const dataArr =
    localStorageService.getLocalStorageData<dataPossibleTypes>(dataType);
  const filteredDataArr = dataArr.filter((elem) => {
    if (!elem.actualData) return true;
    return false;
  });

  return filteredDataArr;
}
