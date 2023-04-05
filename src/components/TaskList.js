import React, { useContext, useState } from 'react'
import MyVerticallyCenteredModal from './UpdateTask'
import { TasksContext } from './context/TaskContext'

const TaskList = () => {
   
  const {state,dispatch} = useContext(TasksContext)
  const {tasksList} = state  

    const updateTask = (task) =>{
        console.log('Update Task')
        setModalShow(true)
        dispatch({type:'SET_SELECTED_TASK',payload:task})
    } 
    const deletTask = (task) =>{
        console.log('Delete Task')
        dispatch({type:'REMOVE_Task',payload:task})
    } 

    const [modalShow,setModalShow] = useState(false)
  return (
    <>
    <table class="table">
    <thead>
      <tr className='text-center'>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tasksList && tasksList.map((task,index)=>{
          return (
            <tr className='text-center' key={task.id}>
            <th scope="row">{index+1}</th>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
                <button type="button" class="btn btn-primary mx-3" onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-primary" onClick={() => deletTask(task)}><i className="bi bi-trash3-fill"></i></button>
            </td>
          </tr>
          )
        })
      }
     
     
     
    </tbody>
  </table>
     <MyVerticallyCenteredModal
     show={modalShow}
     onHide={() => setModalShow(false)}/>
     </>

  )
}

export default TaskList