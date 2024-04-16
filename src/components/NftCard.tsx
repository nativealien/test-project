

const NftCard = ({coll}: any) => {

    const handleClick = () => {
        console.log(coll)
    }

    return <div className="nft-card">
        <img src={coll.meta.content[0].url} onClick={handleClick} />
    </div>
}

export default NftCard