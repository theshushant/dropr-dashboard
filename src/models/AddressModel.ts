import {observable} from "mobx";

export class Address  {

    @observable id!: number;

    @observable related_user_id!: number;

    @observable address_type!: string;

    @observable created_at!: Date;

    @observable updated_at!: Date;

    @observable building_name!: string;

    @observable contact_name!: string;

    @observable contact_number!: string;

    @observable house_number!: string;

    @observable landmark!: string;

    @observable latitude?:string;

    @observable longitude?:string;



    getId(): string | number {
        return this.id;
    }
}
