export interface AxiosCollections{
    total: number,
    continuation: string,
    collections: CollectionInterface[]
}
export interface CollectionInterface{
    id: string,
    blockchain: string,
    meta: Meta
    type: string
    name: string
}
export interface Meta{
    name: string,
    description: string,
    content: [{
        url: string
    }]
}

