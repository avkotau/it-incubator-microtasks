import React, { ChangeEvent, FC } from 'react';

type CallBackInputTitleType = {
    setTitle: (title: string) => void
    title: string
}

const Input: FC<CallBackInputTitleType> = (props) => {

    const callBackInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    }

    return (
        <input value={props.title} type="text"
               onChange={callBackInputTitle}
        />
    );
};

export default Input;
