
export const filterCollection = (collection: any) => {
    return collection.filter((coll: { meta: { content: string | any[] } }) => coll?.meta?.content?.length > 0)
}