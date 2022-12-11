import {ActionType} from "../action-types";

interface UpdateSportsListAction {
    type: ActionType.UPDATE_SPORTS_LIST,
    payload: Object
}

interface UpdateGameAction {
    type: ActionType.UPDATE_GAME,
    payload: Object
}

interface addNewGame {
    type: ActionType.ADD_NEW_GAME,
    payload: Object
}

interface removeGame {
    type: ActionType.REMOVE_GAME,
    payload: Object
}

export type Action = UpdateSportsListAction | UpdateGameAction | addNewGame | removeGame;