import axios from 'axios'
import { useState } from 'react'

export default function AddTask({ fetchApi }) {
  const [task, setTask] = useState('')

  async function addTodo() {
    try {
      await axios.post('http://localhost:3000/task', {
        title: task,
        completed: false
      })
      fetchApi()
      setTask('')
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div  className='Add'>
        <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>
    </div>
    </div>
  )
}
