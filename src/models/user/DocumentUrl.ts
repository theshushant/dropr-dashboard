import {observable} from "mobx";

export class DocumentUrl {

    @observable driver_license!: Array<string>;
    @observable registration_certificate!: Array<string>;
    @observable vehicle_plate!: Array<string>;

}
