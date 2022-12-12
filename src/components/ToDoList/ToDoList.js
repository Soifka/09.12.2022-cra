/*
Практика 12.12.2022

Будемо робити TODO.

Задача 1

Створити компоненту TodoList.
Ця компонента має в стейті масив об'єктів, у якому будуть знаходиитсь текст задачі та її ID.
[
    {id: 1, text: "go to party"},
    {id: 2, text: "meet friends"},
    {id: 3, text: "have a walk"}
]

Компонента рендерить список <li>, всередині якого один рядок з масиву.
<ul>
    <li> go to party </li>
    <li> meet friends </li>
    <li> have a walk </li>
</ul>


Задача 2

В кожній li зробити кнопку, за натиснення на яку цей елемент списку має зникнути.
(тобто оновити стейт таким чином, щоб в масиві з об'єктами або рядками не було того, 
який пов'язаний з кнопкою)

*/

import React from "react";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskArray: [
                {
                    id: 1,
                    taskText: 'go to party'
                },
                {
                    id: 2,
                    taskText: 'call mom'
                },
                {
                    id: 3,
                    taskText: 'wash the dishes'
                },
                {
                    id: 4,
                    taskText: 'do to walk'
                },
                {
                    id: 5,
                    taskText: 'learn React'
                }
            ]
        }
    }

    taskToList() {
        const {taskArray} = this.state;

        return taskArray.map((task) => <li key={task.id}>{task.taskText}</li>);
    }

    render() {
        return (
            <ul>
                {this.taskToList()}
            </ul>
        )
    }
}

export default ToDoList;