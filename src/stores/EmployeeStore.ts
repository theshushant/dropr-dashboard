import {action, computed, makeObservable, observable} from "mobx";
import {User} from "../models/UserModel";
import {employeeService} from "../services/EmployeeService";
import {Dictionary} from "../services/ApiService";

export class EmployeeStore {
    private static _instance: EmployeeStore;

    @observable isLoading: boolean = false;

    @observable employeeMap: Map<number, User> = new Map<number, User>();

    constructor() {
        makeObservable(this);
    }

    static getInstance(): EmployeeStore {
        if (!this._instance) {
            this._instance = new EmployeeStore();
        }
        return this._instance;
    }

    @computed get employees(): Array<User> {

        return Array.from(this.employeeMap.values());
    }

    @action
    async fetchEmployees() {
        try {
            this.isLoading = true;
            this.employeeMap = await employeeService.getEmployees();
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw  e;
        }
    }

    @action
    async getEmployeeById(id: number) {
        try {
            this.isLoading = true;
            const user: User = await employeeService.getEmployeeById(id);
            this.employeeMap.set(user.id, user);
            this.isLoading = false;
            return user;
        } catch (e) {
            this.isLoading = false;
            throw  e;
        }
    }

    @action
    async getMe() {
        try {
            this.isLoading = true;
            const user: User = await employeeService.getMe();
            this.isLoading = false;
            return user;
        } catch (e) {
            this.isLoading = false;
            throw  e;
        }
    }

    @action
    async createEmployee(body: Dictionary<any>) {
        try {
            if(this.employeeMap.size <1){
               await this.fetchEmployees();
            }
            this.isLoading = true;
            const user: User = await employeeService.createEmployee(body);
            this.employeeMap.set(user.id, user);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw  e;
        }

    }

}