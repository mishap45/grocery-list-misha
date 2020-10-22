import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import MainReducer from './Reducers/MainReducer'

let reducersBox = combineReducers({
    mainReducer: MainReducer
});

type rootReducerType = typeof reducersBox;
export type AppStateType = ReturnType<rootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

let ReduxStore = createStore(reducersBox, applyMiddleware(thunkMiddleware));

export default ReduxStore