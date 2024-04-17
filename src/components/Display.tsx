import { useEffect, useState } from "react"
import { CollectionInterface } from "../interface/collection"


const Display = ({collections}: any) => {
    const [collList, setCollList]: any = useState('')
    useEffect( () => {
        console.log(collections)
        const newList = async () => {
            const list: CollectionInterface[] = collections.splice(0, 16)
            setCollList(list)
        }
        newList()
    }, [])

    return <div className="display">
            {collList && collList.map( (coll: any) => {
                return <div className="display-item">
                        <img src={coll.meta.content[0].url} />
                    </div>
            })}
        </div>
}

export default Display