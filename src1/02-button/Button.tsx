import React, { FC } from 'react';

type ButtonNamePropsType = {
    name: string
    callback: () => void

}

const Button: FC<ButtonNamePropsType> = (props) => {


    return (
        <div>
            <button onClick={props.callback}>{props.name}</button>
        </div>
    );
};

export default Button;
