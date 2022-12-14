import {observable} from "mobx";
import {DocumentUrl} from "./DocumentUrl";

export class User {
    @observable __type!: string;

    @observable id!: number;

    @observable name!: string;

    @observable created_at!: Date;

    @observable updated_at!: Date;

    @observable email!: string;

    @observable phone_number!: string;

    @observable profile_pic_url!: string;

    @observable is_email_verified: boolean = false;

    @observable is_phone_verified: boolean = false;

    @observable is_verified: boolean = false;

    @observable role!: string;
    @observable document_urls!: DocumentUrl;


    getId(): string | number {
        return this.id;
    }
}
