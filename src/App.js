import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const getLocalTasks = () => {
    let taskList = localStorage.getItem('tasks');
    if (taskList) {
      return JSON.parse(localStorage.getItem("tasks"))
    } else return [];
  }

  // State
  const [titleText, setTitle] = useState('');
  const [deadlineText, setDeadline] = useState('');
  const [tasks, setTasks] = useState(getLocalTasks());
  const [status, setStatus] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [text, setText] = useState('');


  useEffect(() => {
    saveLocalTasks();
  }, [tasks])


  const saveLocalTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const handlerEdit = (task) => {
    setEditTask(task);
  }

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <div className='todoApp'>
        <TodoList 
          tasks={tasks}
          setTasks = {setTasks}
          onEdit={handlerEdit}
        />
        <Form 
        titleText = {titleText}
        setTitle = {setTitle}
        deadlineText = {deadlineText}
        setDeadline = {setDeadline}
        tasks = {tasks}
        setTasks = {setTasks}
        setStatus = {setStatus}
        editTask = {editTask}
        setEditTask = {setEditTask}
        text = {text}
        />
      </div>
    </div>
  );
}

export default App;