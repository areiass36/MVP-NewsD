import { User } from "./User";

export interface News {
    id?: string,
    creatorId: string,
    title: string,
    content: string,
    imageUrl: string,
    likes?: number,
    creator?: User
}