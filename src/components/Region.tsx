import React from "react"
import {Collapse} from "antd";
import Tournament from "./Tournament";
const { Panel } = Collapse;


interface Data {
    regions: object
}

const Region: React.FC<Data> = (props) => {
    return (
        <Collapse>
            {
                Object.keys(props.regions).map(function (regionItem:string, i:number) {
                    // @ts-ignore
                    let tournamentList:any = props.regions[regionItem].tournament;
                    // @ts-ignore
                    return (<Panel header={props.regions[regionItem][0].region.name + ' - ' + Number(Object.keys(props.regions[regionItem]).length - 1)} key={regionItem}>
                            <Tournament tournaments={tournamentList}/>
                        </Panel>
                    )

                })
            }

        </Collapse>
    )

}

export default Region