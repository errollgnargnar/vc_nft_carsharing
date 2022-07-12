import { useNavigate, useParams } from "react-router-dom";
import { getCar, deleteCar } from "../data_cars";

import CalendarView from "../Components/CalendarView";

export default function Car() {
    let params = useParams();
    let navigate = useNavigate();
    let car = getCar(parseInt(params.carId, 10));
    return (
      <div style={{ padding: "1rem", margin: "auto", width: "95%"}}>
        <h2>
          {car.name}: {car.number}
        </h2>

        <div style={{display:"flex", flexDirection:"row"}}>
          <img src={car.img} width="700px"/>
          <div style={{textAlign:"center", padding:"4%"}}>
            <ul style={{fontSize:"larger"}}>
              <li >
                Token Admission: {car.amount}
              </li>
              <li>
                NFT Token Admission valid for length of Vehicle availability
              </li>
              <li>
                3 Days Per Token <br/>
              </li>
              <li>
                Will Transfer NFT back to Contract after 3 Days
              </li> 
              <li>
                <CalendarView />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}