 import { useState,useEffect } from "react"
 import axios from 'axios'
 import AddTask from "./AddTask"
 import TodoList from "./TodoList"
 import "./App.css"
 
 
 export default function App(){
const [tasks,setTask]=useState([]);
const [loading,setLoading]=useState(false);
const[page,setPage]=useState(1);
const[error ,setError]=useState(null)
const[totalPage,setTotalPage]=useState(1)
 async function fetchApi(){
  setLoading(true)
  try {
    let res = await axios.get(`http://localhost:3000/task?_limit=3&_page=${page}`);
    let total=Number(res.headers['x-total-count'])
    let calculate=Math.ceil(total/3)
    setTotalPage(calculate)

    setTask(res.data)
  } catch (error) {
    setError(error)
  }finally{
    setLoading(false)
  }
  }
  useEffect(()=>{
  fetchApi();
  },[page])
   return (
    <>
    {error && <div>Error :{error}</div>}
    <AddTask fetchApi={fetchApi}/>
    {loading ? (<div>Loading.....</div>):(<TodoList tasks={tasks} fetchApi={fetchApi}/>)}
    <button disabled={page===1} onClick={()=> setPage(page - 1) }>Prev</button>
    <button disabled={page==totalPage} onClick={()=> setPage(page + 1) }>Next</button>
   
    </>
   )



}