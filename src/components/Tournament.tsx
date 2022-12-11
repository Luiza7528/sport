import React from "react"
import {Collapse} from "antd";
import Game from "./Game";
const { Panel } = Collapse;


interface Data {
    tournaments: object
}

const Tournament: React.FC<Data> = (props) => {

    console.log('Tournament component', props)

    return (
        <Collapse>
            {
                Object.keys(props.tournaments).map(function (tournamentItem:string, i:number) {
                    // @ts-ignore
                    let gameList:any = props.tournaments[tournamentItem];

                    // @ts-ignore
                    if(Object.keys(props.tournaments[tournamentItem]).length) {
                        // @ts-ignore
                        return (<Panel header={props.tournaments[tournamentItem][Object.keys(props.tournaments[tournamentItem])[0]].tournament.name + ' - ' + Number(Object.keys(props.tournaments[tournamentItem]).length)} key={tournamentItem}>
                                <Game games={gameList}/>
                            </Panel>
                        )
                    } else {
                        return <div> No data </div>
                    }

                })
            }

        </Collapse>
    )

}

export default Tournament