import {observable} from "mobx";

export class Commission {

    @observable commission!: number;

    @observable employee_id!: number;

    @observable order_id!: number;

    @observable id!: number;

    @observable created_at!: Date;

    @observable updated_at!: Date;

    @observable settlement_date?: Date;

    @observable meta?: any;

    @observable settlement_status!: string;

    getId(): number {
        return this.id;
    }
}