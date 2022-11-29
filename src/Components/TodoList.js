import '../App.css'
import TodoItem from './TodoItem';
import React, { useState } from 'react';

function TodoList({ setTasks, tasks, onEdit}){
    return (
            <div id="task_render">
                {tasks.map((task) => (
                    <TodoItem
                        setTasks={setTasks}
                        task={task}
                        tasks={tasks}
                        key={task.id}
                        titleText={task.title}
                        deadlineText={task.deadline}
                        status={task.status}
                        editHandler={() => onEdit(task)}
                    />
                ))}
            </div>
    )
}

export default TodoList;