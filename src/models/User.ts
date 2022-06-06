import { News } from "./News";

export interface User {
    id?: string,
    name: string,
    profilePhotoUrl: string,
    email: string,
    password: string,
    creationDate?: Date,
    lastUpdate?: Date,
    news?: News[]
}