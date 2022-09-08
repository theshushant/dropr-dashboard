import { action, observable } from "mobx";
import Model from "../models/Model";

export type EntityIdentifier = string | number;

export abstract class Store<M extends Model> {
  @observable entities: M[] = [];

  public get(id: EntityIdentifier): M | undefined {
    return this.entities.find(e => e.id === id);
  }

  @action
  public push(entity: M) {
    const exists = this.entities.find(e => e.id === entity.getId());
    exists || this.entities.push(entity);
  }

  @action
  public remove(id: number) {
    this.entities = this.entities.filter(e => e.id !== id);
  }

  @action
  public addAll(entities: M[]) {
    entities.forEach(e => this.push(e));
  }
}

export default Store;
