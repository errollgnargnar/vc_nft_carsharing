import SeasonCard from "../Components/SeasonCard";
import SidesCard from "../Components/SidesCard";
import StepCard from "../Components/StepsCard";

import { IoWalletOutline } from "react-icons/io5";
import { SiLamborghini }  from "react-icons/si";
import { BsCalendar3Week } from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";

export default function About() {
    return (
    <div style={{backgroundImage: `url("https://app.velocita.club/front/images/banner.jpg")`}}>
      <div style={{ padding: "2%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div>
                <img src="https://s3.amazonaws.com/www.autowise.com/wp-content/uploads/2018/07/30161132/Lamborghini-model-lineup.jpg" style={{width: "800px"}} />
            </div>
            <div style={{margin: "2%", display: "flex", flexDirection:"column", alignItems:"center", marginTop:"2%"}}>
                <h2>Velocita club is a Supercar sharing & NFT Elite Social
    membership club for the Rich & Famous </h2>
                <hr style={{ color: "white", zIndex: 2 }}/>
                <p style={{fontSize:"large"}}>
                    Velocita Club's Supercar Sharing program utilizes Velocita NFT's to give holders the ability to drive some of the world's most exotic vehicles. Here's how it works... <br/><br/>
                    NFT'S are broken up into sides for purchase. You can have: <br/><br/>
                    <div style={{display:"flex", flexDirection:"row", margin:"auto", justifyContent:"center" }}>
                        <SidesCard imgUrl={["https://app.velocita.club/cache/1-Frontx40x40.png","https://app.velocita.club/cache/3-Backx40x40.png"]} heading={"Front/Back"}/>
                        <SidesCard imgUrl={["https://app.velocita.club/cache/7-Leftx40x40.png","https://app.velocita.club/cache/6-Rightx40x40.png"]} heading="Left/Right"/>
                        <SidesCard imgUrl={["https://app.velocita.club/cache/10-Topx40x40.png","https://app.velocita.club/cache/5-Bottomx40x40.png"]} heading="Top/Bottom"/>
                        <SidesCard imgUrl={["https://app.velocita.club/cache/8-Sidex40x40.png","https://app.velocita.club/cache/9-Side-backx40x40.png"]} heading="Side/Side-Back"/>
                    </div><br/>
                    Each side gives you access to one of the 4 seasons of the year to drive the car of your choice. Because of the limitation of the days/weeks in the year and the number of super cars available; this creates higher implicit value on the number of NFTs issued. It also helps to ensure that your NFT will be more likely to resell, due to another holder wanting to have your slot for the next season. 
                </p>
            </div>
        </div>
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", margin: "auto", width: "95%"}}>
            <h3>How it Works</h3>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "center"}}>
                <StepCard title="Connect Your NFT Wallet" icon={<IoWalletOutline size={100}/>} desc={"Get Access with your VC NFTs"}/>
                <StepCard title="Pick Your Vehicle" icon={<SiLamborghini size={100}/>} desc={"Use your Eligibility to Select from our Fleet"}/>
                <StepCard title="Select Eligible Dates" icon={<BsCalendar3Week size={100} /> } desc={"Your VC NFT Sides give Access to a Season for Car Sharing"}/>
                <StepCard title="Show Up and Drive" icon={<GiHouseKeys size={100} />} desc={"Show up on Your Date to Get the Keys and Have Fun!"}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", margin: "auto", background:"black", width:"100%", justifyContent:"space-evenly", border: "1px solid red"}}>
                <h3>NFT Sides to Season Mapping</h3>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <img src="https://velocita.club/images/index-about.png"  style={{margin:"auto", border: "1px solid red"}}/>
                    <div style={{margin:"auto", marginLeft:"-10%", display:"flex", flexDirection:"column", justifyContent: "space-around", width: "439px"}}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <SeasonCard season={"Spring" } />
                            <SeasonCard season={"Summer" } />
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <SeasonCard season={"Fall" } />
                            <SeasonCard season={"Winter" } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  }
  