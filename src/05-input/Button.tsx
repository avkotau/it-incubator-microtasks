import React, { FC } from 'react';

type inputType = {
    onClickButtonHandle: () => void
}

const Button: FC<inputType> = (props) => {

    return (
        <div>
            <button onClick={props.onClickButtonHandle}>+</button>
        </div>
    );
};

export default Button;
