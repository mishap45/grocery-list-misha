import React from 'react'
import App from './App'
import {AppStateType} from './Store/Redux'
import {compose} from 'redux'
import {connect} from 'react-redux'

type statePropsType = {}

type dispatchPropsType = {}

type ownPropsType = {}

type propsAppContainerType = statePropsType & dispatchPropsType & ownPropsType

let AppContainer: React.FC<propsAppContainerType>;

AppContainer = () => {
    return (
        <App/>
    )
};

const mapStateToProps = (state: AppStateType) => ({});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {})
)(AppContainer)