import {action, makeObservable, observable} from "mobx";
import {orderService} from "../services/OrderService";
import {Order} from "../models/OrderModel";

export class OrderStore {
    private static _instance: OrderStore;

    @observable isLoading: boolean = false;

    @observable orders: Array<Order> = [];

    constructor() {
        makeObservable(this);
    }

    static getInstance(): OrderStore {
        if (!this._instance) {
            this._instance = new OrderStore();
        }

        return this._instance;
    }

    @action
    async fetchOrders() {
        try {
            this.isLoading = true;
            this.orders = await orderService.getOrders();
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async getOrderById(id:number) {
        try {
            this.isLoading = true;
            const order: Order = await orderService.getOrderById(id);
            this.isLoading = false;
            return order;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

}