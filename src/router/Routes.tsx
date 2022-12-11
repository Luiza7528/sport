import React from 'react'
import { useRoutes } from "react-router-dom";
import Home from "../views/Home";
import GameInfo from "../components/GameInfo";

export default function Router() {

    const mainRoutes = useRoutes([
        {
            path: "/",
            element: <Home/>,
            children: [
                {
                    path: "/:gameId",
                    element: <GameInfo/>,
                }
            ],
        }
    ]);

    return mainRoutes;
}

