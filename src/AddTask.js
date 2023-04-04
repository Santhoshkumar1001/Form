import React, { useState } from 'react'

const AddTask = () => {

   

   const[title,setTitle]= useState('')
   const[description,setDescription] = useState('')

   const addTask = (e) => {
    e.preventDefault()
    console.log({title,description})

}


  return (
<section className='my-5'>
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
  <div className='text-end'><button type="submit" class="btn btn-primary" onClick={(e) =>addTask(e)}> Add Task</button></div>
  
</form>
</section>

  )
}

export default AddTask