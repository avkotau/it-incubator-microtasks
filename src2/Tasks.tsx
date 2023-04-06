import React, { FC } from 'react';

type TasksType = {
    data1: {
        title: string,
        tasks: Array<TasksInsideType>,
        students: Array<string>
    },

    data2: {
        title: string,
        tasks: Array<TasksInsideType>,
        students: Array<string>
    }
}

type TasksInsideType = {
    taskId: number,
    title: string,
    isDone: boolean
}

const Tasks: FC<TasksType> = (props) => {
    console.log(props)
    return (
        <div style={{display: 'flex'}}>
            <div>
                <h1>{props.data1.title}</h1>
                {props.data1.tasks.map((el) => (
                    <div key={el.taskId}>
                        <h3>{el.title}</h3>
                        <input type="checkbox" defaultChecked={el.isDone}/>
                    </div>
                ))}
                {props.data1.students.map((el, i) => (
                    <div key={i}>{el}</div>
                ))}
            </div>

            <div>
                <h1>{props.data2.title}</h1>
                {props.data2.tasks.map((el) => (
                    <div key={el.taskId}>
                        <h3>{el.title}</h3>
                        <input type="checkbox" defaultChecked={el.isDone}/>
                    </div>
                ))}
                {props.data2.students.map((el, i) => (
                    <div key={i}>{el}</div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
