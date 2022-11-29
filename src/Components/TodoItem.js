import '../App.css';

function TodoItem({ titleText, deadlineText, status, tasks, task, setTasks, editHandler}){

    const deleteHandler = () => {
        if(window.confirm('Bạn có muốn xóa không?')){
            setTasks(tasks.filter((el) => el.id !== task.id));
        }
    }

    let text = "";
    const now = new Date();
    const getDate = new Date(deadlineText);
    if(status === "done"){
        text = "task_content green"
    }
    if(status === "in_progress"){
        if(getDate < now) text = "task_content red"
        if(getDate >= now) text = "task_content orange"
    }
    if(status === "todo"){
        text = "task_content"
    }


    return(
        <div className="task" id="task">  
            <div className={text}>
                <span className='title_text'>{titleText}</span>
                <div className="edit_delete">
                    <span id="datetime" className='deadline_text'>{deadlineText}</span>
                    <i className="fa fa-pencil-alt" onClick={editHandler} ></i>
                    <i className="fa fa-trash" onClick={deleteHandler}></i>
                    <p className='status_text'>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;