import React from 'react' 
import './index.css'

const TaskList = ({tasks, editTask, deleteTask }) => {




  return (
    <div className='table-container'>
        <table className='table-item'>
            <thead>
              <tr>
              <th className='table-heading'>Title</th>
              <th className='table-heading'>Description</th>
              <th className='table-heading'>Due Date</th>
              <th className='table-heading'>Status</th>
              <th className='table-heading'>Actions</th>

              </tr>
            </thead>
            <tbody>
                {tasks.map((task, index)=>(

            <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td className='button-container'>
                    <button  className=' edit btn btn-success' onClick={()=> editTask(index)}>
                        Edit
                    </button>

                       <br/>
                    <button className='btn btn-danger' onClick={()=> deleteTask(index)}>
                        Delete
                    </button>

                 </td>



               </tr>
              

                ))}

          



            </tbody>

        </table>

      
    </div>
  )
}

export default TaskList
