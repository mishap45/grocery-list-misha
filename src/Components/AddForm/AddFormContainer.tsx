import React from 'react'
import {AppStateType} from '../../Store/Redux'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {actionsMain} from '../../Store/Reducers/MainReducer'
import AddForm from './AddForm'

type statePropsType = {}

const addCommodity = actionsMain.addCommodity;
type dispatchPropsType = {
    addCommodity: (id: number, name: string,
                   priority: 1 | 2 | 3 | 4 | 5,
                   dateChange: string) => void
}

type ownPropsType = {}

type propsAddFormContainerType = statePropsType & dispatchPropsType & ownPropsType

const AddFormContainer: React.FC<propsAddFormContainerType> = ({addCommodity}) => {
    return (
        <AddForm addCommodity={addCommodity} />
    )
};

const mapStateToProps = (state: AppStateType) => ({});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {
        addCommodity
    })
)(AddFormContainer)