export interface Data<T> {
    offset: number;
    limit: string;
    total: string;
    count: string;
    results: T;
}