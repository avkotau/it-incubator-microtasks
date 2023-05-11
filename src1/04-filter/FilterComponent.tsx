import React, { FC } from 'react';
import { BlueButton, Button, TomatoButton } from "./Styles";
import MoneyComponent from "./MoneyComponent";

type FilterComponentType = {
    currentMoney: Array<{
        banknote: string;
        nominal: number;
        number: string
    }>
    onClickFilterHandler: (moneyElem: string) => void
}

const FilterComponent: FC<FilterComponentType> = (props) => {

    return (
        <>
            <div>
                <Button onClick={() => props.onClickFilterHandler('all')}>all</Button>
                <TomatoButton onClick={() => props.onClickFilterHandler('ruble')}>ruble</TomatoButton>
                <BlueButton onClick={() => props.onClickFilterHandler('dollar')}>dollar</BlueButton>
            </div>
            <MoneyComponent currentMoney={props.currentMoney}/>
        </>
    );
};

export default FilterComponent;
