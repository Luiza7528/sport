import React from "react"
import {Link} from "react-router-dom";

interface Data {
    games: object
}

const Game: React.FC<Data> = (props) => {

    return (
        <div>
            {
                Object.keys(props.games).map(function (gameItem:string, i:number) {
                    // @ts-ignore
                    let homeTeam = props.games[gameItem].home.name;
                    // @ts-ignore
                    let homeTeamCount = props.games[gameItem].match_info?.score?.split(':')[0];
                    // @ts-ignore
                    let awayTeam = props.games[gameItem].away.name;
                    // @ts-ignore
                    let awayTeamCount = props.games[gameItem].match_info?.score?.split(':')[1];
                    // @ts-ignore
                    let marketCount = props.games[gameItem].markets_count;
                    // @ts-ignore
                    return (<Link to={props.games[gameItem]._id} key={props.games[gameItem]._id}>
                            <div style={{borderBottom: '1px solid #ccc'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{fontWeight: 600}}>{homeTeam}</p>
                                    <p style={{fontWeight: 600}}>{homeTeamCount}</p>
                                </div>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{fontWeight: 600}}>{awayTeam}</p>
                                    <p style={{fontWeight: 600}}>{awayTeamCount}</p>
                                </div>
                                <p style={{textAlign: 'right'}}>Markets count: {marketCount}</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    )

}

export default Game;