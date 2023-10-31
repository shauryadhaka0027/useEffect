import { useState, useEffect } from "react"
import PostItem from "./PostItem"
import axios from "axios"
import "./App.css"

const getData = async (url) => {
  try {
    let res = await axios.get(url)
    const totalCount = res.headers.get("x-total-count")

    const totalPages = Math.ceil(totalCount / 10) 
    const data = res.data

    return {
      data: data,
      totalPages: totalPages,
    }
  } catch (error) {
    throw new Error(error)
  }
}

function App() {
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState([])
  const [err, setErr] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchAndUpdateData(page)
  }, [page])

  const fetchAndUpdateData = async (page) => {
    setLoading(true)
    try {
      let res = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      )
      const { data, totalPages } = res
      setTotalPages(totalPages)
      setTasks(data)
      setLoading(false)
    } catch (error) {
      setErr(true)
      setLoading(false)
    }
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (err) {
    return <h1>Something went wrong</h1>
  }

  return (
    <>
      <div >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        <p>{page}</p>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      {tasks.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  )
}

export default App