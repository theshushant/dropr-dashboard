import {apiService, Dictionary} from "./ApiService";
import {AppOption} from "../models/AppOption";
import ErrorModel from "../models/ErrorModel";

class OptionService {
    static getInstance(): OptionService {
        return new OptionService();
    }

//"https://cdn-images-1.medium.com/max/1200/1*Zkhl4Zz43z2_iR_ADlP-rg.png"
    //https://static.vecteezy.com/system/resources/previews/000/554/970/large_2x/t-shirt-template-vector.jpg
    async getCategories(): Promise<Map<number, AppOption>> {
        const response = await apiService.get<any>("/categories", true,);
        let result: Map<number, AppOption> = new Map<number, AppOption>();
        response.data.forEach((element: AppOption) => {
            result.set(element.id, element);
        });
        return result;
    }

    async createCategory(body: Dictionary<any>): Promise<AppOption> {
        const response = await apiService.post<any>("/categories", true, body);
        return response.data;
    }

    async updateCategory(body: Dictionary<any>, id: number) {
        const response = await apiService.put<any>("/categories/" + id, true, body);
        console.log(JSON.stringify(response.data));
    }

    async deleteCategory(id: number): Promise<boolean> {
        const response = await apiService.delete<any>("/categories/" + id, true,);
        if (!response.deleted) {
            const errorModel: ErrorModel = new ErrorModel();
            errorModel.errors = "Unable to Delete";
            throw  errorModel;
        }
        return response.deleted;
    }

    async getPosters(): Promise<Map<number, AppOption>> {
        const response = await apiService.get<any>("/posters", true,);
        let result: Map<number, AppOption> = new Map<number, AppOption>();
        response.data.forEach((element: AppOption) => {
            result.set(element.id, element);
        });
        return result;
    }

    async createPoster(body: Dictionary<any>): Promise<AppOption> {
        const response = await apiService.post<any>("/posters", true, body);
        return response.data;
    }

    async updatePoster(body: Dictionary<any>, id: number) {
        const response = await apiService.put<any>("/posters/" + id, true, body);
        console.log(JSON.stringify(response.data));
    }

    async deletePoster(id: number): Promise<boolean> {
        const response = await apiService.delete<any>("/posters/" + id, true,);
        if (!response.deleted) {
            const errorModel: ErrorModel = new ErrorModel();
            errorModel.errors = "Unable to Delete";
            throw  errorModel;
        }
        return response.deleted;
    }

    async getTags(): Promise<Map<number, AppOption>> {
        const response = await apiService.get<any>("/package-types", true,);
        let result: Map<number, AppOption> = new Map<number, AppOption>();
        response.data.forEach((element: AppOption) => {
            result.set(element.id, element);
        });
        return result;
    }

    async createTag(body: Dictionary<any>): Promise<AppOption> {
        const response = await apiService.post<any>("/package-types", true, body);
        return response.data;
    }

    async updateTag(body: Dictionary<any>, id: number) {
        const response = await apiService.put<any>("/package-types/" + id, true, body);
        console.log(JSON.stringify(response.data));
    }

    async deleteTag(id: number): Promise<boolean> {
        const response = await apiService.delete<any>("/package-types/" + id, true,);
        if (!response.deleted) {
            const errorModel: ErrorModel = new ErrorModel();
            errorModel.errors = "Unable to Delete";
            throw  errorModel;
        }
        return response.deleted;
    }
}

export const optionService = OptionService.getInstance();
