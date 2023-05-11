import React, { FC } from 'react';

type MessageType = {
    message: string
}
type MessagesType ={
    messages: Array<MessageType>
}

const Messages: FC<MessagesType> = (props) => {

    return (
        <div>
            {props.messages.map((el, i) =>
                <div key={i}>{el.message}</div>
            )}
        </div>
    );
};

export default Messages;
