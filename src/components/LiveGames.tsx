import React from "react"
import {useEffect, useState} from "react";
import { LiveGamesData } from "../services/liveGamesData";
import {useDispatch, useSelector} from "react-redux";
import {updateSportsList, updateGame, addNewGame, removeGame} from "../store/acrion-creators";
import {State} from "../store";
import Sport from "./Sport";

const LiveGames: React.FC = () => {
    const dispatch = useDispatch();
    const [subscribeId, setSubscribeId] = useState(null);
    const [pageLoading, setPageLoading] = useState(false);
    const sports:any = useSelector((state: State) => state.sports.sportsData);

    useEffect(() => {
        let interval:any;
        setPageLoading(true);
        const ws = new WebSocket(
            "wss://mob.blue-version.com/hub/ws-sport"
        );

        ws.onopen = () => {
            console.log("Connection Established!");

            const initCmd = {
                "cmd": "init",
                "params": {
                    "device": "desktop",
                    "language": "en-GB"
                },
                // "rid": "4E50E253-6181-050B-8E40-7155F77EE9DA"
                "rid": rId(10)
            };
            ws.send(JSON.stringify(initCmd));

            const getLiveGamesCmd = {
                "cmd":"get",
                "params":{
                    "channel":"active",
                    "label":"live games",
                    "subscribe":true,
                    "what":{
                        "game":[
                            "_id",
                            "date",
                            "home",
                            "away",
                            "status",
                            "markets_count"
                        ],
                        "match_info":[
                            "score",
                            "scores",
                            "game_score",
                            "server",
                            "time"
                        ],
                        "region":[
                            "id",
                            "alias",
                            "name",
                            "order"
                        ],
                        "sport":[
                            "id",
                            "alias",
                            "name",
                            "order"
                        ],
                        "tournament":[
                            "id",
                            "alias",
                            "name",
                            "order"
                        ]
                    },
                    "where":{
                        "game":{
                            "active":true,
                            "feed":"live"
                        }
                    }
                },
                "rid":"FF32862C-84F7-1276-CC06-289CA979E081"
                // "rid": rId(10)
            }
            ws.send(JSON.stringify(getLiveGamesCmd));

            const pingCmd = {
                "cmd": "ping",
                "rid": subscribeId || rId(10)
            }

            interval = setInterval(() => {
                ws.send(JSON.stringify(pingCmd));
            }, 10000);

        };

        ws.onmessage = (event) => {
            const response = JSON.parse(event.data);

            if(response.data[0]?._new) {
                dispatch(addNewGame(response.data[0]));
            }

            if(response.data[0]?._remove) {
                dispatch(removeGame(response.data[0]));
            }

            if(response.data[0]?.sport && !response.data[0]?._remove && !response.data[0]?._new) {
                dispatch(updateGame(response.data[0]));
            }

            if(response.data.data) {
                setSubscribeId(response.data.sid);
                let sportData:any = LiveGamesData.getLiveGameData(response.data.data);
                dispatch(updateSportsList(sportData));
                setPageLoading(false);
            }
        };

        ws.onclose = () => {
            console.log("Connection Closed!");
        };

        ws.onerror = (err) => {
            console.log("WS Error", err);
        };

        return () => {
            clearInterval(interval)
            ws.close();
        };

    }, [])

    const rId = (size: number) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < size; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return <div style={{ marginRight: '50px', width: '700px'}}>
        <h2>Sports</h2>
        {pageLoading && <p>Loading...</p>}
        {!pageLoading && sports !== null &&
            <Sport sports={sports.sports}/>
        }
    </div>
}

export default LiveGames