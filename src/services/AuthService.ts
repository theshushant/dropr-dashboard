import {apiService} from "./ApiService";
import {User} from "../models/UserModel";
import FileModal from "../models/FileModal";
import axios from "axios";

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

    async getMe() {
        const response = await apiService.get<any>("/employees/me", true);
        localStorage.setItem("auth_token", response.auth_token);
        return response.data;
    }

    async getUrl(DataFor: string, typeOfData: string): Promise<FileModal> {
        return await apiService.post<any>("/public/pre-signed-url", true, {
            "for": DataFor,
            "content_type": typeOfData,
        },);
    }

    async uploadFile(file: File, url: string) {
            await apiService.upload(url, file);
    }
}

export const authService = AuthService.getInstance();
