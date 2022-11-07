import {action, computed, makeObservable, observable} from "mobx";
import {AppOption} from "../models/AppOption";
import {optionService} from "../services/OptionService";
import {Dictionary} from "../services/ApiService";
import ErrorModel from "../models/ErrorModel";

export class OptionStore {
    private static _instance: OptionStore;

    @observable isLoading: boolean = false;

    @observable categoryMap: Map<number, AppOption> = new Map<number, AppOption>();

    @observable posterMap: Map<number, AppOption> = new Map<number, AppOption>();

    @observable tagMap: Map<number, AppOption> = new Map<number, AppOption>();

    constructor() {
        makeObservable(this);
    }

    static getInstance(): OptionStore {
        if (!this._instance) {
            this._instance = new OptionStore();
        }
        return this._instance;
    }

    @computed get categories():Array<AppOption> {
        return Array.from(this.categoryMap.values());
    }

    @computed get tags():Array<AppOption> {
        return Array.from(this.tagMap.values());
    }

    @computed get posters():Array<AppOption> {
        return Array.from(this.posterMap.values());
    }

    @action
    async fetchCategories() {
        try {
            this.isLoading = true;
            this.categoryMap = await optionService.getCategories();
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async createCategory(body: Dictionary<any>) {
        try {
            this.isLoading = true;
            const appOption = await optionService.createCategory(body);
            this.categoryMap.set(appOption.id, appOption);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async deleteCategory(id: number) {
        try {
            this.isLoading = true;
            await optionService.deleteCategory(id);
            this.categoryMap.delete(id);
            this.isLoading = false;
        } catch (e) {
            console.log(e)
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async fetchPosters() {
        try {
            this.isLoading = true;
            this.posterMap = await optionService.getPosters();
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async createPoster(body: Dictionary<any>) {
        try {
            this.isLoading = true;
            const appOption: AppOption = await optionService.createPoster(body);
            this.posterMap.set(appOption.id, appOption);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async deletePoster(id: number) {
        try {
            this.isLoading = true;
            await optionService.deletePoster(id);
            this.posterMap.delete(id);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async fetchTags() {
        try {
            this.isLoading = true;
            this.tagMap = await optionService.getTags();
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async createTag(body: Dictionary<any>) {
        try {
            this.isLoading = true;
            const appOption: AppOption = await optionService.createTag(body);
            this.tagMap.set(appOption.id, appOption);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

    @action
    async deleteTag(id: number) {
        try {
            this.isLoading = true;
            await optionService.deleteTag(id);
            this.tagMap.delete(id);
            this.isLoading = false;
        } catch (e) {
            this.isLoading = false;
            throw e;
        }
    }

}