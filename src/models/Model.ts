import { capitalize } from "lodash";
import { action, observable } from "mobx";
import Store, {EntityIdentifier} from "../stores/Store";

export abstract class Model {
  protected constructor(readonly id: EntityIdentifier) {}

  static getStore(): Store<Model> {
    const store = (this as any)._store;
    if (!store) {
      console.error(`_store not defined in ${this}
            Please define _store and assign 'this' to it in parent store's constructor`);
    }
    return store;
  }

  // static fromJson(json: any, identifierKey: string = "id"): Model {
  //   const id = json[identifierKey] as EntityIdentifier;
  //
  //   const entity = this.getOrNew(id);
  //
  //   entity.updateFromJson(json);
  //
  //   return entity;
  // }

  public static getOrNew(id: EntityIdentifier): Model {
    let entity = this.getStore().get(id);

    if (!entity) {
      entity = new (this as any)(id);
      this.getStore().push(entity!);
    }

    return entity!;
  }

  public static get(id: EntityIdentifier) {
    return this.getStore().get(id);
  }

  abstract getId(): EntityIdentifier;

  // @action
  // updateFromJson(json: any) {
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const k in json) {
  //     // eslint-disable-next-line no-prototype-builtins
  //     if (json.hasOwnProperty(k)) {
  //       const deserializer = this.getDeserializer(k);
  //       if (deserializer) {
  //         json[k] && deserializer.bind(this)(json[k]);
  //       } else {
  //         (this as any)[k] = json[k];
  //       }
  //     }
  //   }
  // }
  //
  // private getDeserializer(prop: string) {
  //   return (this as any)[`deserialize${capitalize(prop)}`];
  // }
}

export default Model;
