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
}

export default new AuthService();
