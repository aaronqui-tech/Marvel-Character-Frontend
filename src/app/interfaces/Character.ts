import { CommonAppearances } from "./CommonAppearances";
import { Stories } from "./Stories";
import { Thumbnail } from "./Thumbnail";
import { Urls } from "./Urls";

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    thumbnail: Thumbnail;
    comics: CommonAppearances;
    series: CommonAppearances;
    stories: Stories;
    events: CommonAppearances;
    urls: Urls[];
}