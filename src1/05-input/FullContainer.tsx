import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";
import Messages from "./Messages";


const FullContainer = () => {
    const [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        setMessages([{message: title}, ...(messages)]);
    }

    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message1'},
        {message: 'message1'}
    ]);

    const onClickButtonHandle = () => {
        addMessage(title)
        setTitle('');
    }

    return (
        <div>
            <Input
                setTitle={setTitle} title={title}
            />
            <Messages messages={messages}/>
            <Button onClickButtonHandle={onClickButtonHandle}/>
        </div>
    );
};

export default FullContainer;
