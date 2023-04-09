import React, { useState } from 'react';
import FilterComponent from "./FilterComponent";
import { Wrapper } from "./Styles";

const TaskFilter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    let currentMoney = money;

    const [filteredElem, setMoneyElem] = useState('');

    if (filteredElem === 'dollar') {
        currentMoney = money.filter((el) => el.banknote === 'dollar')
    } else if (filteredElem === 'ruble') {
        currentMoney = money.filter((el) => el.banknote === 'ruble')
    }


    const onClickFilterHandler = (moneyElem: string) => {
        setMoneyElem(moneyElem);
    }

    return (
        <Wrapper>
            <FilterComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </Wrapper>

    );
};

export default TaskFilter;
