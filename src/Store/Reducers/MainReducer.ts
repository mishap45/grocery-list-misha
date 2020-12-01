import {InferActionsTypes} from "../Redux";


export type groceryType = {
    id: number
    name: string
    priority: 1 | 2 | 3 | 4 | 5
    dateChange: string

}

type initialStateType = {
    List: Array<groceryType>
    DeleteList: Array<groceryType>
}

let initialState: initialStateType = {
    List: [],
    DeleteList: []
};

const MainReducer = (state = initialState, action: MainTypesCollapse): initialStateType => {
    switch (action.type) {
        case 'ADD_COMMODITY': {
            return {
                ...state,
                List: [...state.List, {
                    id: action.id,
                    name: action.name,
                    dateChange: action.dateChange,
                    priority: action.priority
                }]
            }
        }

        case 'BOUGHT_COMMODITY': {
            return {
                ...state,
                List: state.List.filter(p => p.id !== action.idDelete),
                DeleteList: [...state.DeleteList, {
                    id: action.id,
                    name: action.name,
                    dateChange: action.dateChange,
                    priority: action.priority
                }]
            }
        }

        case 'DELETE_COMMODITY': {
            return {
                ...state,
                DeleteList: state.DeleteList.filter(p => p.id !== action.idDelete)
            };
        }

        case 'DELETE_COMMODITY_TO_BUY': {
            return {
                ...state,
                List: state.List.filter(p => p.id !== action.idDelete)
            };
        }

        case 'RESTORE_COMMODITY': {
            return {
                ...state,
                DeleteList: state.DeleteList.filter(p => p.id !== action.idDelete),
                List: [...state.List, {
                    id: action.id,
                    name: action.name,
                    dateChange: action.dateChange,
                    priority: action.priority
                }]
            }
        }

        default:
            return state
    }
};

//AC
type MainTypesCollapse = InferActionsTypes<typeof actionsMain>

export const actionsMain = {
    addCommodity: (id: number, name: string,
                   priority: 1 | 2 | 3 | 4 | 5,
                   dateChange: string) => ({type: 'ADD_COMMODITY', id, name, priority, dateChange} as const),
    boughtCommodity: (idDelete: number, id: number, name: string,
                      priority: 1 | 2 | 3 | 4 | 5,
                      dateChange: string) => ({
        type: 'BOUGHT_COMMODITY',
        idDelete,
        id,
        name,
        priority,
        dateChange
    } as const),
    deleteCommodity: (idDelete: number) => ({type: 'DELETE_COMMODITY', idDelete} as const),
    deleteCommodityToBuy: (idDelete: number) => ({type: 'DELETE_COMMODITY_TO_BUY', idDelete} as const),
    restoreCommodity: (idDelete: number, id: number, name: string,
                      priority: 1 | 2 | 3 | 4 | 5,
                      dateChange: string) => ({
        type: 'RESTORE_COMMODITY',
        idDelete,
        id,
        name,
        priority,
        dateChange
    } as const)
};

export default MainReducer
