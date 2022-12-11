import React from "react"
import {Outlet} from "react-router-dom";
import LiveGames from "../components/LiveGames";

const Home: React.FC = () => {
    return <main style={{ display: "flex" }}>
        <LiveGames/>
        <Outlet/>
    </main>
}


export default Home