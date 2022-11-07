import {observable} from "mobx";

export class AppOption {

    @observable id!: number;

    @observable name!: string;

    @observable created_at!: Date;

    @observable updated_at!: Date;

    @observable url?: string;

    @observable is_active: boolean = false;

    getId(): number {
        return this.id;
    }
}