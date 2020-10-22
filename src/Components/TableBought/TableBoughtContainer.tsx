import React from 'react'
import {AppStateType} from '../../Store/Redux'
import {getBought} from '../../Store/Selector/Selector'
import {actionsMain, groceryType} from '../../Store/Reducers/MainReducer'
import {compose} from 'redux'
import {connect} from 'react-redux'
import TableBought from './TableBought'

type statePropsType = {
    DeleteList: Array<groceryType>
}

const restoreCommodity = actionsMain.restoreCommodity;
const deleteCommodity = actionsMain.deleteCommodity;
type dispatchPropsType = {
    restoreCommodity: (idDelete: number, id: number, name: string,
                       priority: 1 | 2 | 3 | 4 | 5,
                       dateChange: string) => void
    deleteCommodity: (idDelete: number) => void
}

type ownPropsType = {}

type propsTableToBuyContainerType = statePropsType & dispatchPropsType & ownPropsType

const TableBoughtContainer: React.FC<propsTableToBuyContainerType> = ({DeleteList, restoreCommodity, deleteCommodity}) => {

    const DeleteList1 = DeleteList.sort((a, b) => a.name > b.name ? 1 : -1);
    const DeleteList2 = DeleteList1.sort((a, b) => a.priority - b.priority);

    return (
        <TableBought DeleteList={DeleteList2} restoreCommodity={restoreCommodity} deleteCommodity={deleteCommodity}/>
    )
};

const mapStateToProps = (state: AppStateType) => ({
    DeleteList: getBought(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {
        restoreCommodity,
        deleteCommodity
    })
)(TableBoughtContainer)