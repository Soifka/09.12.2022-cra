/*
Задача 3: зробити рендер лішки окремим функціональним компонентом

ToDoItem.js

function компонента для Айтема (лі з текстом + кнопкою)
За натисненням на кнопку лі зникає з екрану

<li key={task.id}>
            {task.text}
            <button onClick={() => {this.removeTask(task.id)}}>X</button>
            </li>

Декомпозиція.   

1. Зробити функціональну компоненту
2. Винести в цю компоненту <li>
3. Переписати return таким чином, щоб вивести на екран все те, що ми отримуємо через props
4. Зробити колбек в батьківського елемента, який має отримати id на вхід та видалити за стейта елемент з таким id
5. В компоненті ToDoItem зробити виклик колбека і передати йому id (натисненням на кнопку)
*/

import React from "react";

function ToDoItem(props) {
    const taskArray = props.taskArray;
    const clickHandler = (taskIdToDel) => {
        props.getIdToDel(taskIdToDel);
    }

    return taskArray.map((task) => <li key={task.id}>{task.taskText}   <button onClick={() => {clickHandler(task.id)}}>delete</button></li>)
        
}

export default ToDoItem;
