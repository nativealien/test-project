import { useEffect, useState } from "react"
import { CollectionInterface } from "../models/Collection"
import NftCard from "./NftCard"


const Display = ({collections}: any) => {
    const [collList, setCollList]: any = useState('')
    useEffect( () => {

        const newList = async () => {
            const list: CollectionInterface[] = collections.splice(0, 15)
            setCollList(list)
        }
        if(collList === '') newList()
    })

    return <div className="display-wrap">
        {/* <canvas></canvas> */}
        <div className="display">
            {collList && collList.map( (coll: any) => {
                return <NftCard coll={coll} />
            })}
        </div>
    </div>
}

export default Display