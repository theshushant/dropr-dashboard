import { observable } from "mobx";
import {UserStore} from "./UserStore";

export class RootStore {
    private static _instance: RootStore;

    @observable user: UserStore;


    constructor() {
        this.user = UserStore.getInstance();
    }

    static getInstance(): RootStore {
        if (!this._instance) {
            this._instance = new RootStore();
        }

        return this._instance;
    }
}