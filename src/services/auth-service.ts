import { baseURL } from "../const/config";

class AuthService {
  async login(email: string, password: string) {}

  async register(email: string, password: string) {
    return await fetch(`${baseURL}/api/auth/register`, {
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  async verifyTokens() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return false;

    try {
      const response = await fetch(`${baseURL}/api/auth/tokenVerification`, {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) return false;

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);

      return true;
    } catch (error) {
      return false;
    }
  }
}

export default new AuthService();
