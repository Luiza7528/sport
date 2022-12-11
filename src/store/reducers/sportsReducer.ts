import {Action} from "../actions"
import {ActionType} from "../action-types";

interface initialStateI {
    sportsData: object | null
}

const initialState:any = {
    sportsData: null
};

const reducer = (state:initialStateI = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE_SPORTS_LIST:
            return {
                ...state,
                sportsData: action.payload
            };
        case ActionType.UPDATE_GAME:
            return {
                ...state,
                sportsData: {
                    ...state.sportsData,
                    sports: {
                        // @ts-ignore
                        ...state.sportsData.sports,
                        // @ts-ignore
                        [action.payload.sport.id] : {
                            // @ts-ignore
                            ...state.sportsData.sports[action.payload.sport.id],
                            regions : {
                                // @ts-ignore
                                ...state.sportsData.sports[action.payload.sport.id].regions,
                                // @ts-ignore
                                [action.payload.region.id] : {
                                    // @ts-ignore
                                    ...state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id],
                                    tournament: {
                                        // @ts-ignore
                                        ...state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament,
                                        // @ts-ignore
                                        [action.payload.tournament.id] : {
                                            // @ts-ignore
                                            ...state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament[action.payload.tournament.id],
                                            // @ts-ignore
                                            [action.payload._id] : {
                                                // @ts-ignore
                                                ...state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament[action.payload.tournament.id][action.payload._id],
                                                // @ts-ignore
                                                markets_count: action.payload.markets_count ?  action.payload.markets_count : state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament[action.payload.tournament.id][action.payload._id].markets_count,
                                                match_info : {
                                                    // @ts-ignore
                                                    score: action.payload.match_info?.score ? action.payload.match_info?.score : state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament[action.payload.tournament.id][action.payload._id].match_info.score
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //
                }
            };
        case ActionType.ADD_NEW_GAME:
            return {
                ...state,
                sportsData: {
                    ...state.sportsData,
                    sports: {
                        // @ts-ignore
                        ...state.sportsData.sports,
                        // @ts-ignore
                        [action.payload.sport.id] : {
                            // @ts-ignore
                            ...state.sportsData.sports[action.payload.sport.id],
                            0 : action.payload,
                            regions : {
                                // @ts-ignore
                                ...state.sportsData.sports[action.payload.sport.id]?.regions,
                                // @ts-ignore
                                [action.payload.region.id] : {
                                    // @ts-ignore
                                    ...state.sportsData.sports[action.payload.sport.id]?.regions[action.payload.region.id],
                                    0 : action.payload,
                                    tournament: {
                                        // @ts-ignore
                                        ...state.sportsData.sports[action.payload.sport.id]?.regions[action.payload.region.id].tournament,
                                        // @ts-ignore
                                        [action.payload.tournament.id] : {
                                            // @ts-ignore
                                            ...state.sportsData.sports[action.payload.sport.id]?.regions[action.payload.region.id].tournament[action.payload.tournament.id],
                                            // @ts-ignore
                                            [action.payload._id] : action.payload
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //
                }
            };
        case ActionType.REMOVE_GAME:
            const removeGameItem = (key:string, object:any) =>
                Object.fromEntries(
                    Object.entries(object).filter(([k]) => k !== key)
                );
            // @ts-ignore
            let restGameItems = removeGameItem(action.payload._id, state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament[action.payload.tournament.id])

            // @ts-ignore
            return {
                ...state,
                sportsData: {
                    ...state.sportsData,
                    sports: {
                        // @ts-ignore
                        ...state.sportsData.sports,
                        // @ts-ignore
                        [action.payload.sport.id] : {
                            // @ts-ignore
                            ...state.sportsData.sports[action.payload.sport.id],
                            regions : {
                                // @ts-ignore
                                ...state.sportsData.sports[action.payload.sport.id].regions,
                                // @ts-ignore
                                [action.payload.region.id] : {
                                    // @ts-ignore
                                    ...state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id],
                                    tournament: {
                                        // @ts-ignore
                                        ...state.sportsData.sports[action.payload.sport.id].regions[action.payload.region.id].tournament,
                                        // @ts-ignore
                                        [action.payload.tournament.id] : restGameItems
                                    }
                                }
                            }
                        }
                    }
                    //
                }
            };
        default:
            return state
    }
}

export default reducer;