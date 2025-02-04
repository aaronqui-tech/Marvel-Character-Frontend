export interface DataLog<T> {
    totalPages: number;
    totalElements: number;
    firstPage: boolean;
    lastPage: boolean;
    pageSize: number;
    currentPage: number;
    logs: T;
}