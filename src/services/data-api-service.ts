import { baseURL } from "../const/config";

type data = "tasks" | "notes";

class DataApiService {
  async getData<T>(dataType: data): Promise<T> {
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

  async saveData(dataType: data, data: any) {
    //Сделать обработку входных данных и убрать локалсторадж
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
  async deleteData(dataType: data, id: string) {
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
