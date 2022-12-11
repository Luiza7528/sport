import React from "react"
import {useParams} from "react-router-dom";

const GameInfo: React.FC = () => {
    const routeParams = useParams();

    return <div>
        <h2>GameId : {routeParams.gameId} </h2>
    </div>
}

export default GameInfo