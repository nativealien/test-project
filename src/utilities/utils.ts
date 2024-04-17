import { CollectionInterface } from "../interface/collection"

export const filterCollection = (collection: CollectionInterface[]) => {
    return collection.filter((coll) => coll?.meta?.content?.length > 0)
}