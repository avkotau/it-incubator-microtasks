import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksType = {
    [key: string]: TaskType[];
};


function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todolistId: string, taskId: string) {
        let filteredTasks = {...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)};
        setTasks(filteredTasks);
    }

    function addTask(todolistId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = {...tasks, [todolistId]: [task, ...tasks[todolistId]]};
        setTasks(newTasks);
    }

    function changeStatus(todolistId: string, taskId: string, isDoneValue: boolean) {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, isDone: isDoneValue} : el)
        });
    }

    function changeFilter(todolistId: string, valueFilter: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: valueFilter} : el));
    }

    function removeTodolist(todolistId: string) {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
    }

    return (
        <div className="App">
            {
                todolists.map(el => {
                        /*переместить filter в TodoList*/
                        let tasksForTodolist = tasks[el.id];

                        if (el.filter === "active") {
                            tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                        }

                        if (el.filter === "completed") {
                            tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                        }

                        return (
                            <Todolist
                                key={el.id}
                                todolistId={el.id}
                                title={el.title}
                                tasks={tasksForTodolist}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                filter={el.filter}
                                removeTodolist={removeTodolist}
                            />
                        )
                    }
                )
            }

        </div>
    );
}

export default App;
