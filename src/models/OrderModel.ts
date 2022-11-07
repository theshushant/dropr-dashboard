import {observable} from "mobx";
import { User } from "./UserModel";
import {Address} from "./AddressModel";

export class Order{

    @observable user_id!: number;

    @observable id!: number;

    @observable drop_address_id!: number;

    @observable pickup_address_id!: number;

    @observable delivery_partner_id?: number;

    @observable user!: User;

    @observable pickupAddress!: Address;

    @observable dropAddress!: Address;

    @observable created_at!: Date;

    @observable updated_at!: Date;

    @observable scheduled_delivery_date!: Date;

    @observable time_slot!: string;

    @observable payment_status!: string;

    @observable package_type!: string;

    @observable order_status!: string;

    @observable distance!: number;

    @observable delivery_instructions?: string;

    @observable category?: string;

    @observable amount!: number;


    getId(): string | number {
        return this.id;
    }
}
