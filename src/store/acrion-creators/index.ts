import {ActionType} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const updateSportsList = (list: object): any => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_SPORTS_LIST,
            payload: list
        })
    }
}

export const updateGame = (item: object): any => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_GAME,
            payload: item
        })
    }
}

export const addNewGame = (item: object): any => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_NEW_GAME,
            payload: item
        })
    }
}

export const removeGame = (item: object): any => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_GAME,
            payload: item
        })
    }
}