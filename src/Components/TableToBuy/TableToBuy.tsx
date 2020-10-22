import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'
import style from './tableToBuy.module.css'
import {groceryType} from '../../Store/Reducers/MainReducer'
import Button from 'react-bootstrap/Button'

type tableToBuyPropsType = {
    List: Array<groceryType>

    boughtCommodity: (idDelete: number, id: number, name: string,
                      priority: 1 | 2 | 3 | 4 | 5,
                      dateChange: string) => void
    deleteCommodityToBuy: (idDelete: number) => void
}

const TableToBuy: React.FC<tableToBuyPropsType> = ({List, boughtCommodity, deleteCommodityToBuy}) => {

    let id: number = Math.floor(Math.random() * Math.floor(1000000));

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let Now = dd + '/' + mm + '/' + yyyy + ' | ' + hour + ':' + minute;

    const list = List.map(l => <tr key={l.id}>
        <td>{l.name}</td>
        <td>{l.priority}</td>
        <td>{l.dateChange}</td>
        <td><Button onClick={() => {
            boughtCommodity(l.id, id, l.name, l.priority, Now)
        }} variant="success">Куплено</Button>
            {' '}
            <Button variant="danger" onClick={() => {
                deleteCommodityToBuy(l.id)
            }}>Видалити</Button></td>
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

export default TableToBuy