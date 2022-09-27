import '../App.css';

function TodoItem({titleText, deadlineText, status, tasks, task, setTasks}){

    const deleteHandler = () => {
        if(window.confirm('Bạn có muốn xóa không?')){
            setTasks(tasks.filter((el) => el.id !== task.id));
        }
    }

    return(
        <div className="task" id="task">  
            <div className="task_content">
                <span className='title_text'>{titleText}</span>
                <div className="edit_delete">
                    <span id="datetime" className='deadline_text'>{deadlineText}</span>
                    <i className="fa fa-pencil-alt"></i>
                    <i className="fa fa-trash" onClick={deleteHandler}></i>
                    <p className='status_text'>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;