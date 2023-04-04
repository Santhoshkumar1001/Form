import React, { useState } from 'react'
import MyVerticallyCenteredModal from './UpdateTask'

const TaskList = () => {

    const updateTask = () =>{
        console.log('Update Task')
        setModalShow(true)
    } 
    const deletTask = () =>{
        console.log('Delete Task')
    } 

    const [modalShow,setModalShow] = useState(false)
  return (
    <>
    <table class="table">
    <thead>
      <tr className='text-center'>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className='text-center'>
        <th scope="row">1</th>
        <td>Title</td>
        <td>Description</td>
        <td>
            <button type="button" class="btn btn-primary mx-3" onClick={() => updateTask()}><i className="bi bi-pencil-square"></i></button>
            <button type="button" class="btn btn-primary" onClick={() => deletTask()}><i className="bi bi-trash3-fill"></i></button>
        </td>
      </tr>
     
     
    </tbody>
  </table>
     <MyVerticallyCenteredModal
     show={modalShow}
     onHide={() => setModalShow(false)}/>
     </>

  )
}

export default TaskList