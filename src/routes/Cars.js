import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getCars } from "../data_cars";

export default function Cars() {
    let cars = getCars();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{ display: "flex", margin: "auto",width: "80%", textAlign:"center" }}>
            <nav
            style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}>
            <input
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                    setSearchParams({ filter });
                    } else {
                    setSearchParams({});
                    }
                }}/>
            {cars
                .filter((car) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = car.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((car) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                            };
                        }}
                        to={`/cars/${car.number}`}
                        key={car.number}
                    >
                        {car.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}