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
}
export interface Meta{
    name: string,
    description: string,
    content: {
        url: string
    }
}

export default class Collection implements CollectionInterface{
    id: string;
    blockchain: string;
    meta: Meta;
    type: string
    constructor(id: string, blockchain: string, meta: Meta, type: string){
        this.id = id,
        this.blockchain = blockchain,
        this.meta = meta
        this.type = type
    }

    static initCollection = () => {
        return(
            <div className="collection"></div>
        )
    }
    
}