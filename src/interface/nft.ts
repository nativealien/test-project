import { Meta } from "./collection";

export interface NftByCollInt{
    continuation: string,
    items: []
}

export interface NftInterface{
    blockchain: string,
    id: string,
    collection: string;
    itemCollection:ItemInterface,
    meta: Meta,
}

export interface ItemInterface{
    id: string;
    name: string,
}
