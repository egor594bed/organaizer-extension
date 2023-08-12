import { baseURL } from "../const/config";
import { dataType } from "../types/DataTypes";

class DataApiService {
  async getData<T>(dataType: dataType): Promise<T> {
    return await fetch(`${baseURL}/api/${dataType}/getData`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}` ?? "",
      },
    }).then((response) => {
      return response.json();
    });
  }

  async saveData(dataType: dataType, data: any) {
    if (data.length === 0) return;
    return await fetch(`${baseURL}/api/${dataType}/saveData`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}` ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataArr: data,
      }),
    });
  }

  //Реальзовать на беке
  async deleteData(dataType: dataType, id: string) {
    return await fetch(`${baseURL}/api/${dataType}/deleteData?id=${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}` ?? "",
      },
    });
  }
}

export default new DataApiService();
