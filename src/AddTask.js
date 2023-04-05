import React, { useContext, useState } from 'react'
import { TasksContext } from './components/context/TaskContext'

const AddTask = () => {

   const {dispatch} = useContext(TasksContext)

   const[title,setTitle]= useState('')
   const[description,setDescription] = useState('')
  //  const[phone,setPhone] = useState ('')

   const addTask = (e) => {
    e.preventDefault()
    console.log({title,description})
    dispatch({type:'ADD_TASK',payload:{title,description}})
    setTitle('')
    setDescription('')

}


  return (
<section className='my-5'>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Student Name</label>
    <input type="text" placeholder="Enter Student Name" class="form-control" value={title} 
    onChange={(e) => setTitle(e.target.value)}  />
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Student Address</label>
    <input type="text"  placeholder="Enter Student Address" class="form-control"value={description}
    onChange={(e)=> setDescription(e.target.value)}/>
  </div>

  {/* <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number" placeholder="Enter Phone Number" class="form-control" value={phone} 
    onChange={(e) => setphone(e.target.value)}  />
    <div id="emailHelp" class="form-text"></div>
  </div> */}

  <div className='text-end'><button type="submit" class="btn btn-primary" onClick={(e) =>addTask(e)}> Add Student</button></div>
  
</form>
</section>

  )
}

export default AddTask