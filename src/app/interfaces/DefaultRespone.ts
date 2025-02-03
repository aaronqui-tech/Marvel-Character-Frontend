import { Data } from "./Data";

export interface DefaultResponse<T> {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data<T>;
}