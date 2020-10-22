import React from 'react'
import {AppStateType} from '../../Store/Redux'
import {getToBuy} from '../../Store/Selector/Selector'
import {actionsMain, groceryType} from '../../Store/Reducers/MainReducer'
import {compose} from 'redux'
import {connect} from 'react-redux'
import TableToBuy from './TableToBuy'

type statePropsType = {
    List: Array<groceryType>
}

const boughtCommodity = actionsMain.boughtCommodity;
const deleteCommodityToBuy = actionsMain.deleteCommodityToBuy;
type dispatchPropsType = {
    boughtCommodity: (idDelete: number, id: number, name: string,
                      priority: 1 | 2 | 3 | 4 | 5,
                      dateChange: string) => void
    deleteCommodityToBuy: (idDelete: number) => void
}

type ownPropsType = {}

type propsTableToBuyContainerType = statePropsType & dispatchPropsType & ownPropsType

const TableToBuyContainer: React.FC<propsTableToBuyContainerType> = ({List, boughtCommodity, deleteCommodityToBuy}) => {

    const List1 = List.sort((a, b) => a.name > b.name ? 1 : -1);
    const List2 = List1.sort((a, b) => a.priority - b.priority);

    return (
        <TableToBuy List={List2} boughtCommodity={boughtCommodity} deleteCommodityToBuy={deleteCommodityToBuy}/>
    )
};

const mapStateToProps = (state: AppStateType) => ({
    List: getToBuy(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {
        boughtCommodity,
        deleteCommodityToBuy
    })
)(TableToBuyContainer)