import {apiService, Dictionary} from "./ApiService";
import {User} from "../models/user/UserModel";

class EmployeeService {
    static getInstance(): EmployeeService {
        return new EmployeeService();
    }

    async login(email: string, password: string): Promise<User> {
        const response = await apiService.post<any>("/auth/carrier-login", false, {
            email,
            password,
        });
        localStorage.setItem("auth_token", response.token);
        return response.employee;
    }

    async getEmployees(): Promise<Map<number, User>> {
        const response = await apiService.get<any>("/employees/all", true);
        let result: Map<number, User> = new Map<number, User>();
        response.data.forEach((element: User) => {
            result.set(element.id, element);
        });
        return result;
    }

    async getEmployeeById(id: number): Promise<User> {
        const response = await apiService.get<any>("/employees/" + id, true);
        console.log("here response is this " + response.toString())
        return response.data;
    }

    async getMe(): Promise<User> {
        const response = await apiService.get<any>("/employees/me", true);
        return response.data;
    }

    async createEmployee(body: Dictionary<any>): Promise<User> {
        const response = await apiService.post<any>("/employees", true, body);
        return response.data;
    }

    async updateEmployee(id: number, body: Dictionary<any>): Promise<User> {
        const response = await apiService.put<any>("/employees/" + id, true, body);
        return response.data;
    }
}

export const employeeService = EmployeeService.getInstance();
