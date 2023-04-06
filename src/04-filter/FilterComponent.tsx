import React, { FC } from 'react';

type FilterComponentType = {
    currentMoney: Array<{
        banknote: string;
        nominal: number;
        number: string
}>
    onClickFilterHandler: (moneyElem: string) => void
}

const FilterComponent: FC<FilterComponentType> = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, i) => {
                    return(
                        <li key={i}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>props.onClickFilterHandler('all')}>all</button>
                <button onClick={()=>props.onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={()=>props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </div>
    );
};

export default FilterComponent;
