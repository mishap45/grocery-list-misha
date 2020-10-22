import {AppStateType} from '../Redux'

export const getToBuy = (state: AppStateType) => {
    return state.mainReducer.List
};

export const getBought = (state: AppStateType) => {
    return state.mainReducer.DeleteList
};