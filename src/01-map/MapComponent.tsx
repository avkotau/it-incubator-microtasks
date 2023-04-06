import React, { FC } from 'react';
// import { StudentsType } from './Map'

type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
}


const MapComponent: FC<NewComponentType> = (props) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <>
            <ul>
                {props.students.map(el =>
                    <li key={el.id}>{el.name}</li>
                )}
            </ul>
            <table>
                <tbody>
                {topCars.map((el, i) =>
                    <tr key={i}>
                        <th>{el.manufacturer}</th>
                        <td>{el.model}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>


    );
};

export default MapComponent;
