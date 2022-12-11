export abstract class LiveGamesData {

    static getLiveGameData(data: any) {

        let modifiedLiveGameData:any = {};

        let sportData:any = data.reduce((result:any, item:any) => {
            (result[item.sport.id] || (result[item.sport.id] = [])).push(item);
            return result;
        }, {});
        modifiedLiveGameData['sports'] = sportData;

        Object.keys(modifiedLiveGameData.sports).map((obj, i) => {
            let regionData =  modifiedLiveGameData.sports[obj].reduce((result:any, item:any) => {
                (result[item.region.id] || (result[item.region.id] = [])).push(item);
                return result;
            }, {});

            modifiedLiveGameData.sports[obj]['regions'] = regionData;
            
            Object.keys(modifiedLiveGameData.sports[obj]['regions']).map((obj1, i) => {
                let tournamentData =  modifiedLiveGameData.sports[obj]['regions'][obj1].reduce((result1:any, item1:any) => {
                    (result1[item1.tournament.id] || (result1[item1.tournament.id] = [])).push(item1);
                    return result1;
                }, {});

                modifiedLiveGameData.sports[obj]['regions'][obj1]['tournament'] = tournamentData;

                Object.keys(modifiedLiveGameData.sports[obj]['regions'][obj1]['tournament']).map((item, i) => {
                    let gameData =  modifiedLiveGameData.sports[obj]['regions'][obj1]['tournament'][item].reduce((result1:any, item1:any) => {
                        // (result1[item1._id] || (result1[item1._id] = [])).push(item1); //@todo check when there are more than 1 item
                        result1[item1._id]= item1;
                        return result1;
                    }, {});

                    modifiedLiveGameData.sports[obj]['regions'][obj1]['tournament'][item] = gameData

                })

            })
            
        })
        return modifiedLiveGameData;

    }

}