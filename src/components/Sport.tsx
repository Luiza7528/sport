import React from "react"
import {Collapse} from "antd";
import Region from "./Region";
const { Panel } = Collapse;

interface Data {
    sports: object
}

const Sport: React.FC<Data> = (props) => {

    if(Object.keys(props.sports).length) {
        return (
            <Collapse>
                {
                    Object.keys(props.sports).map(function (sportItem:string, i:number) {
                        // @ts-ignore
                        let regionsList:any = props.sports[sportItem].regions;
                        // @ts-ignore
                        return (<Panel header={props.sports[sportItem][0].sport.name + ' - ' + Number(Object.keys(props.sports[sportItem]).length - 1)} key={props.sports[sportItem][0].sport.id}>
                            <Region regions={regionsList}/>
                        </Panel>)

                    })
                }
            </Collapse>
        )
    } else {
        return <p>Nothing to show</p>
    }



}

export default Sport