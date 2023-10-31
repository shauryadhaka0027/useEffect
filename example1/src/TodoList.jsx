import axios from 'axios'


export default function TodoList({ tasks, fetchApi }) {
  const toggle = async (id) => {
    const task = tasks.find((t) => t.id === id);
    try {
      await axios.patch(`http://localhost:3000/task/${id}`, {
        completed: !task.completed,
      });
      fetchApi();
    } catch (err) {
      console.error("Error updating task", err);
    }




}
const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/task/${id}`);
    fetchApi();
  } catch (err) {
    console.error("Error deleting task", err);
  }
};


  return (
    <>

      <div className="todo">
        <div className='todo1'> 
        {tasks.map((task) => (
          <div className='todo2' key={task.id}>
             <span onClick={()=> toggle(task.id)}>{task.title}</span>
             <span style={{color : task.completed ? "green": "red"}}>{task.completed?" __ true" :" __  false"}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          
           
          </div>
        ))}
      </div>
        </div>
       
    </>
  )
}
