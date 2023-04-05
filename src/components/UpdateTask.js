import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TasksContext } from './context/TaskContext';

function MyVerticallyCenteredModal(props) { 
  const{state,dispatch} = useContext(TasksContext)
  const {selectedTask} = state
    const[title,setTitle]= useState('')
   const[description,setDescription] = useState('')
   const [id, setId] = useState(0)

useEffect(()=>
{
  if (Object.keys(selectedTask).length !==0){
    setTitle(selectedTask.title)
    setDescription(selectedTask.description)
    setId(selectedTask.id)
  }
 
},[selectedTask])
     

    const updateTask = () => {
        props.onHide()
        dispatch({type:'UPDATE_TASK',payload:{title,description,id}})
    }
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Update Task
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task Title</label>
    <input type="text" placeholder="Enter Task Title" class="form-control" value={title} 
    onChange={(e) => setTitle(e.target.value)}  />
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task Description</label>
    <input type="text"  placeholder="Enter Task Description" class="form-control"value={description}
    onChange={(e)=> setDescription(e.target.value)}/>
  </div>
 
  
</form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
      <div className='text-end'><button type="submit" class="btn btn-primary" onClick={(e) =>updateTask(e)}> Update Task</button></div>
    </Modal.Footer>
  </Modal>
  )
}

export default MyVerticallyCenteredModal