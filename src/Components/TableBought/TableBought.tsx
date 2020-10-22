import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'
import style from './tableBought.module.css'
import {groceryType} from '../../Store/Reducers/MainReducer'
import Button from 'react-bootstrap/Button'

type tableToBuyPropsType = {
    DeleteList: Array<groceryType>

    restoreCommodity: (idDelete: number, id: number, name: string,
                       priority: 1 | 2 | 3 | 4 | 5,
                       dateChange: string) => void
    deleteCommodity: (idDelete: number) => void
}

const TableBought: React.FC<tableToBuyPropsType> = ({DeleteList, restoreCommodity, deleteCommodity}) => {

    let id: number = Math.floor(Math.random() * Math.floor(1000000));

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let Now = dd + '/' + mm + '/' + yyyy + ' | ' + hour + ':' + minute;

    const list = DeleteList.map(dl => <tr key={dl.id}>
        <td>{dl.name}</td>
        <td>{dl.priority}</td>
        <td>{dl.dateChange}</td>
        <td>
            <Button variant="primary" onClick={() => {
                restoreCommodity(dl.id, id, dl.name, dl.priority, Now)
            }}>Відновити</Button>
            {' '}
            <Button variant="danger" onClick={() => {deleteCommodity(dl.id)}}>Видалити</Button></td>
    </tr>);

    return (
        <div className={style.main}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Назва продукту</th>
                    <th>Пріоритет</th>
                    <th>Дата зміни</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </Table>
        </div>
    )
};

export default TableBought