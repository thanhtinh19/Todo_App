import '../App.css'
import TodoItem from './TodoItem';

function TodoList({ setTasks, tasks, onEdit}){

    return (
        <div className="content">
            <div className="search">
                <input type="text" id="search" placeholder="Search" />
                <i className="fa fa-search"></i>
            </div>
            <div id="task_render">
                {tasks.map((task) => (
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