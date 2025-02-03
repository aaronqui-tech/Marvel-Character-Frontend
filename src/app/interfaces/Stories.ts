import { StoriesItems } from "./StoriesItems";

export interface Stories{
    available: string;
    collectionURI: string;
    returned: number;
    items: StoriesItems[];
}