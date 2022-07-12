export default function NFTthumbs({imgUrl}) {
    return (
        <div style={{border:"3px", borderStyle:"solid", borderColor:"white"}}>
            <img src={imgUrl} width="70px" />
        </div>
    )
}