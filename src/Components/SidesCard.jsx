import NFTthumbs from "../Components/NFTthumbs";

export default function SidesCard({imgUrl, heading}) {
    return (
        <div style={{margin: "5px", backgroundColor:"#38252a", padding: "3%", display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <h6 style={{backgroundColor:"#38252a"}}>{heading}</h6>
            <div style={{display: "flex", justifyContent:"center", backgroundColor:"#38252a"}}>
                <NFTthumbs imgUrl={imgUrl[0]}/>
                <NFTthumbs imgUrl={imgUrl[1]}/>
            </div>  
        </div>
    )
}