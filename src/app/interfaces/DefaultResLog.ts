import { DataLog } from "./DataLog"

export interface DefaultResLog<T> {
    code: string;
    status: string;
    timestamp: string;
    data: DataLog<T>;
}