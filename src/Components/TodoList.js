import { useState } from 'react';
import '../App.css'
import TodoItem from './TodoItem';

function TodoList({ setTasks, tasks, onEdit, getTasks}){
    const [taskSearch, setTaskSearch] = useState([]);
    const inputSearchHandler = (e) => {
        setTaskSearch(e.target.value);
    }
    return (
        <div className="content">
            <form className="search">
                <input type="text" id="search" placeholder="Search" onChange={inputSearchHandler} value={taskSearch} />
                
                {/* <i className="fa fa-search" onClick={searchHandler  } ></i> */}
            </form>
            <div id="task_render">
                {tasks.filter((val) => {
                    if(taskSearch == ''){
                        return val;
                    } else if(val.title.toLowerCase().includes(taskSearch.toLowerCase())){
                        return val;
                    } else if (val.status.toLowerCase().includes(taskSearch.toLowerCase())) {
                        return val;
                    }
                }).map((task) => (
                    <TodoItem
                        setTasks={setTasks}
                        task={task}
                        tasks={tasks}
                        key={task.id}
                        titleText={task.title}
                        deadlineText = {task.deadline}
                        status = {task.status}
                        editHandler = {() => onEdit(task)}
                         />
                ))}
            </div>
        </div> 
    )
}

export default TodoList;