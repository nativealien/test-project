import { useEffect, useState } from "react"
import { CollectionInterface } from "../interface/collection"
import { getNftByCollection } from "../backend/rarible"
import Popup from "./Popup"


const Display = ({collections}: any) => {
    const [collList, setCollList]: any = useState('')
    const [item, setItem] = useState(null) //({items: []})
    useEffect( () => {
        const newList = async () => {
            const list: CollectionInterface[] = collections.splice(0, 16)
            console.log(list)
            setCollList(list)
        }
        newList()
}, [])

    const handleClick = async (coll: CollectionInterface) => {
        let id = String(coll.id)
        const res = await getNftByCollection(id)
        // console.log(res)
        // const resItems = await res.items
        setItem(await res)
    }

    return <div className="display">
            {collList && collList.map( (coll: CollectionInterface) => {
                return <div key={coll.id} className="display-item">
                        <img src={coll.meta.content[0].url} onClick={() => handleClick(coll)} />
                    </div>
            })}
            { item && <Popup items={item} toggle={setItem} /> }
        </div>
}

export default Display