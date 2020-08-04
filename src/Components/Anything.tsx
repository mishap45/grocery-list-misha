import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';
import {gg} from "./data";
import OverlayTrigger from "react-bootstrap/cjs/OverlayTrigger";
import Tooltip from "react-bootstrap/cjs/Tooltip";
import Button from "react-bootstrap/cjs/Button";
import {BikesFrames} from "../Data/bikeFrame";


const Anything = ({}) => {

    let data = gg.one.map(ggData => <tr>
        <td>{ggData.id}</td>
        <td>{ggData.fn}</td>
        <td>{ggData.ln}</td>
        <td>{ggData.un}</td>
    </tr>);

    let gddg = BikesFrames.Frames.map(hhh => <img src={hhh.img} alt=""/>);

    return (
        <div>
            <Table striped bordered hover variant={'dark'} responsive={'md'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </Table>

            <>
                <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                            Tooltip on <strong>{'top'}</strong>.
                        </Tooltip>
                    }
                >
                    <Button variant="primary">Tooltip on {'top'}</Button>
                </OverlayTrigger>

                {gddg}
            </>
        </div>
    )
};

export default Anything