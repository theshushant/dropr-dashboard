import {action, makeObservable, observable} from "mobx";
import {LoginState} from "../enums/LoginStatus";
import {User} from "../models/UserModel";
import {authService} from "../services/AuthService";

export class UserStore {
    private static _instance: UserStore;

    @observable loggedInUser: User | undefined;

    @observable isLoading: boolean = false;

    @observable isLoggedIn: boolean = false;

    @observable loginState: LoginState = LoginState.PENDING;

    constructor() {
        makeObservable(this);
    }

    static getInstance(): UserStore {
        if (!this._instance) {
            this._instance = new UserStore();
        }

        return this._instance;
    }

    @action
    async login(username: string, password: string) {
        try {
            this.isLoading = true;
            this.loggedInUser = await authService.login(username, password);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }


    @action
    async getMe() {
        try {
            this.isLoading = true;
            const order = await authService.getMe();
            this.setLoggedInUser(order);
            return order;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }
    //
    // @computed get users() {
    //     return this.entities;
    // }


    @action
    private _setLoginStatus(status: LoginState) {
        this.loginState = status;
    }

    @action
    async getLoginStatus() {
        // const isTokenPresent = !!localStorage.getItem("auth_token");
        // if (isTokenPresent) {
        //     const order = this.loggedInUser;
        //     if (!order) {
        //         try {
        //             const res: User = await this.getMe();
        //             this.setLoggedInUser(res);
        //         } catch (e) {
        //             localStorage.clear();
        //             this._setLoginStatus(LoginState.LOGGED_OUT);
        //         }
        //     } else {
        //         this._setLoginStatus(LoginState.LOGGED_IN);
        //     }
        // } else {
        //     this._setLoginStatus(LoginState.LOGGED_OUT);
        // }
    }

    @action
    setLoggedInUser(user: User) {
        this.loggedInUser = user;
        this._setLoginStatus(LoginState.LOGGED_IN);
        this.isLoading = false;
        this.isLoggedIn = true;
    }

}