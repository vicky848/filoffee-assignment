import React, { useState , useEffect} from 'react'
import './index.css'
import TaskList from '../TaskList'

const AddTask = () => {

    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [status, setStatus] = useState('Pending')


useEffect(() => {
  const storeTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(storeTasks)

  
}, [])



useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))


}, [tasks])






    const addTasks = (task) => {
        setTasks([...tasks, task])
      }



      const editTask = (index) => {
       const task = tasks[index];
       const updatedTitle = prompt('Edit Title', task.title)|| task.title 

       const updatedDescription = prompt("Edit Description", task.description)|| task.description 

       const updatedDueDate = prompt("Edit Due Date", task.dueDate)|| task.dueDate 
       const updatedStatus = prompt("Edit Status", task.status)|| task.status 

       const updatedTasks = [...tasks];
       updatedTasks[index] = {

        ...tasks,
        title: updatedTitle,
        description:updatedDescription,
        dueDate:updatedDueDate,
        status:updatedStatus,







       };


     setTasks(updatedTasks)


      }


   const deleteTask = (index) => {

if (window.confirm('Are you sure you want to delete this tasks ')){

const updatedTasks = tasks.filter((_, i) => i !== index)
setTasks(updatedTasks)



}
 




      }














const onChangeTitle = (event)=> {
    setTitle(event.target.value)

}


const onChangeDescription = (event) => {
    setDescription(event.target.value)
}


const onChangeDate = (event) => {
    setDueDate (event.target.value)
}

const onChangeStatus = (event) => {
    setStatus(event.target.value)
}


 

const handleSubmit = (event) => {
    event.preventDefault()

addTasks({title, description, dueDate, status});
setTitle("")
setDescription("")
setDueDate("")
setStatus("Pending")




}






    return (
    <div className='main-container'>

    <form className='form-container' onSubmit={handleSubmit} > 

    <div className='card'>
        <label>Title : </label>
        <input
        type='text'
        value={title}
        onChange={onChangeTitle}
        required
        className='input-title'

        />

    </div> <br/>
    <div className='card' >
        <label>Description : </label>
        <textarea
        
         className='textarea-input'
        value={description}
        onChange={onChangeDescription}
        
        />

    </div><br/>
    <div  className='card'>
        <label>Due Date : </label>
        <input 
        type='date'
        value={dueDate}
        onChange={onChangeDate}
        />

    </div> <br/>
    <div  className='card'>
        <label>Status : </label>
        <select 
        
        value={status}
        onChange={onChangeStatus}
        
        
        >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>

        </select>

    </div><br/>


    <button type = "submit" className='btn btn-primary'>ADD TASK</button>


        </form>
        <TaskList tasks = {tasks} editTask = {editTask} deleteTask = {deleteTask}/>
    
    </div>

 

)
}

export default AddTask
