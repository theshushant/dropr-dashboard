import {apiService} from "./ApiService";
import {toast} from "react-toastify";
import {User} from "../models/UserModel";

class AuthService {
    static getInstance(): AuthService {
        return new AuthService();
    }

    async login(email: string, password: string): Promise<User> {
            const response = await apiService.post<any>("/auth/carrier-login", false, {
                email,
                password,
            });
            localStorage.setItem("auth_token", response.auth_token);
            return response.employee;
    }
}

export const authService = AuthService.getInstance();
