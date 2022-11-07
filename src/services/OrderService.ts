import {apiService} from "./ApiService";
import {toast} from "react-toastify";
import {User} from "../models/UserModel";
import {Order} from "../models/OrderModel";

class OrderService {
    static getInstance(): OrderService {
        return new OrderService();
    }

    async getOrders(): Promise<Array<Order>> {
        const response = await apiService.get<any>("/orders", true,);
        console.log("here response" + response.toString())
        return response.data;
    }

    async getOrderById(id: number) {
        const response = await apiService.get<any>("/orders/"+id, true,);
        console.log("here response" + response.toString())
        return response.data;
    }
}

export const orderService = OrderService.getInstance();
