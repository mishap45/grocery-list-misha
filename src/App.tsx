import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MenuList from './Components/MenuList/MenuList'
import TableToBuyContainer from './Components/TableToBuy/TableToBuyContainer'
import TableBoughtContainer from './Components/TableBought/TableBoughtContainer'
import AddFormContainer from './Components/AddForm/AddFormContainer'

type appPropsType = {

}

const App:React.FC<appPropsType> = () => {
    return (
        <div className="App">
            <Header />
            <AddFormContainer />
            <MenuList text={'Потрібно купити'} />
            <TableToBuyContainer />
            <MenuList text={'Куплено'} />
            <TableBoughtContainer />
        </div>
    );
}

export default App;
