import { CommonSummary } from "./CommonSummary";

export interface CommonAppearances{
    available: number;
    collectionURI: string;
    returned: number;
    items : CommonSummary[];
}