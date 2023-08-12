import { baseURL } from "../const/config";
import { dataPossibleTypes, dataType } from "../types/DataTypes";
import authService from "./auth-service";

class DataApiService {
  async getData<T>(dataType: dataType): Promise<T | undefined> {
    try {
      const response: Response = await fetch(
        `${baseURL}/api/${dataType}/getData`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("accessToken")}` ?? "",
          },
        }
      );

      if (response.status === 401) {
        const verify: boolean = await authService.verifyTokens();
        if (verify) {
          return await this.getData(dataType);
        } else {
          return undefined;
        }
      }

      return (await response.json()) as T;
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  }

  async saveData(dataType: dataType, data: dataPossibleTypes[]) {
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
