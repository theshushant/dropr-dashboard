import { observable} from "mobx";
import {UserStore} from "./UserStore";
import {EmployeeStore} from "./EmployeeStore";
import {OrderStore} from "./OrderStore";
import {OptionStore} from "./OptionStore";

export class RootStore {
    private static _instance: RootStore;

    @observable user: UserStore;
    @observable employeeStore: EmployeeStore;
    @observable orderStore: OrderStore;
    @observable optionStore: OptionStore;


    constructor() {
        this.user = UserStore.getInstance();
        this.employeeStore = EmployeeStore.getInstance();
        this.orderStore = OrderStore.getInstance();
        this.optionStore = OptionStore.getInstance();
    }

    static getInstance(): RootStore {
        if (!this._instance) {
            this._instance = new RootStore();
        }

        return this._instance;
    }
}