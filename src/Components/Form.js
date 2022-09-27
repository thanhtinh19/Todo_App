import '../App.css';
import React, { useEffect, useState} from 'react';
function Form({titleText, setTitle, deadlineText, setDeadline, tasks, setTasks, setStatus, editTask, setEditTask}){
    
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')
    const inputTitleHandler = (e) => {
        setTitle(e.target.value);
    }
    const inputDeadlineHandler = (e) => {
        setDeadline(e.target.value);
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    const updateTask = (id,title, deadline, status) => {
        const newTask = tasks.map(task => task.id === id ? { id, title, deadline, status } : task);
        setTasks(newTask);
        setEditTask("");
    }
    useEffect(() => {
        const statusVal = document.getElementById('status');
        if (editTask) {
            setTitle(editTask.title);
            setDeadline(editTask.deadline);
            statusVal.value = editTask.status;
        } else {
            setTitle("");
            setDeadline("dd/mm/yyyy");
            statusVal.value = "todo"
        }
    }, [setTitle, editTask]);

    const createTask = (e) => {
        const statusVal = document.getElementById('status').value;
        e.preventDefault();
        if (!editTask) {
            if (titleText) {
                setTasks([
                    ...tasks, {id: Math.random() * 1000, title: titleText, deadline: deadlineText, status: statusVal }
                ]);
                setTitle("");
            }
        } else {
            updateTask(editTask.id, titleText, deadlineText, statusVal)
        }

    }
    
    return(
        <div className="newTask">
            <form onSubmit={createTask}>
                <div>Title: </div>
                <input type="text" id="title" autoFocus={true} value={titleText} onChange={inputTitleHandler} required />
                <div className="date_status">
                    <div className="date">
                        <div>Deadline: </div>
                        <input type="date" id="deadline" value={deadlineText} onChange={inputDeadlineHandler} required/>
                    </div>
                    
                    <div className="status">
                        <div>Status: </div>
                        <select name="status" id="status" onChange={statusHandler}> 
                            <option value="todo">Todo</option>
                            <option value="in_progress">In progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                </div> 
                <button type="submit">
                    {editTask ? "Edit task" : "Create task"}
                </button>

                
            </form>
        </div>
    )
}

export default Form;