import { observable } from "mobx";
import {UserStore} from "../stores/UserStore";
import Model from "./Model";

export class User extends Model {
  static _store: UserStore;

  @observable __type!: string;

  @observable id!: number;

  @observable name!: string;

  @observable created_at!: Date;

  @observable updated_at!: Date;

  @observable email!: string;

  @observable phone_number!: string;

  @observable profile_pic_url!: string;


  getId(): string | number {
    return this.id;
  }
}
