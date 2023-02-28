import {computed, observable} from "mobx";

export class Address {

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

    @observable latitude?: string;

    @observable longitude?: string;

    get getAddress():string {
        let address:string = "";
        if(this.building_name!=null){
            address+=this.building_name+", ";
        }
        if(this.house_number!=null){
            address+=this.house_number+",  ";
        }
        if(this.landmark!=null){
            address+=this.landmark;
        }

        return address;
    }

    getId(): string | number {
        return this.id;
    }
}
