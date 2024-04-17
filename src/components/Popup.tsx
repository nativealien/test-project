import { Dispatch, SetStateAction } from "react"
import { NftByCollInt, NftInterface } from "../interface/nft"

type PopUpProp = { items: NftByCollInt, toggle: Dispatch<SetStateAction<null>>}

const Popup: React.FC<PopUpProp> = ({items, toggle}) => {
    console.log(items)
    const itemsArr: NftInterface[] = items.items

    return <div id="popup">
            <div id='popup-msg'>
                <button onClick={e => toggle(null)}>X</button>
                {itemsArr.length > 0 && <div id="image-div">
                            <img src={itemsArr[0].meta.content[0].url} alt="" width="300px" />
                            <select name="nft-id" id="nft-id">
                                {itemsArr.map( nft => <option>{nft.collection.split(':')[1]}</option> )}
                            </select>
                        </div> || <p>Error</p> }
            </div>
    </div>
}

export default Popup