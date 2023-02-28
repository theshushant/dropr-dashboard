import {apiService} from "./ApiService";
import {Order} from "../models/OrderModel";
import {Commission} from "../models/Commission";

class OrderService {
    static getInstance(): OrderService {
        return new OrderService();
    }

    async getOrders(): Promise<Array<Order>> {
        const response = await apiService.get<any>("/orders", true,);
        console.log("here response" + response.toString())
        return response.data;
    }

    async getCommissions(order = false, employee = false):Promise<Array<Commission>> {
        const response = await apiService.get<any>("/commissions", true, {"order": order, "employee": employee},);
        console.log("here response in commissions" + response.toString());
        console.log("here response in commissions" + response.date.toString());
        return response.date;
    }

    async getOrderById(id: number) {
        const response = await apiService.get<any>("/orders/" + id, true,);
        console.log("here response" + response.toString())
        return response.data;
    }
}

export const orderService = OrderService.getInstance();
