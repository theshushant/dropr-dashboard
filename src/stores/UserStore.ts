import { action, computed, observable } from "mobx";
import {LoginState} from "../enums/LoginStatus";
import Store from "./Store";
import {User} from "../models/UserModel";

export class UserStore extends Store<User> {
    private static _instance: UserStore;

    @observable loggedInUser: User | undefined;

    @observable isLoading: boolean = false;

    @observable isLoggedIn: boolean = false;

    @observable loginState: LoginState = LoginState.PENDING;

    constructor() {
        super();
        User._store = this;
    }

    static getInstance(): UserStore {
        if (!this._instance) {
            this._instance = new UserStore();
        }

        return this._instance;
    }

    // async login(username: string, password: string) {
    //     try {
    //         this.isLoading = true;
    //         await authService.login(username, password);
    //         return this.getMe();
    //     } catch (e) {
    //         this.isLoading = false;
    //         throw e;
    //     }
    // }
    //
    // @action
    // async getMe() {
    //     try {
    //         this.isLoading = true;
    //         const user = await authService.me();
    //         this.setLoggedInUser(user);
    //         return user;
    //     } catch (e) {
    //         this.isLoading = false;
    //         throw e;
    //     }
    // }
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
        //     const user = this.loggedInUser;
        //     if (!user) {
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