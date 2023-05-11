import React from 'react';
import Button from "./Button";

const ButtonItem = () => {

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    // const foo1 = () => {
    //     console.log('100200')
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    const Youtube1Foo = (subscribe: string) => {
        console.log(subscribe)
    }
    const Youtube2Foo = (subscribe: string) => {
        console.log(subscribe)
    }
    const Youtube3Foo = () => {
        console.log('Im Stupid button')
    }


    return (
        <div>
            {/*<button onClick={() => onClickHandler("Vasa")}>Click</button>*/}
            {/*<button onClick={foo1}>foo1</button>*/}
            {/*<button onClick={() => foo2(100200)}>foo2</button>*/}

            <Button name={'youtube 1'} callback={() => Youtube1Foo('VASYA')}/>
            <Button name={'youtube 2'} callback={() => Youtube2Foo('Petia')}/>
            <Button name={'Stupid'} callback={Youtube3Foo}/>
        </div>
    );
};

export default ButtonItem;
