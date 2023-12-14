// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../css/Home.module.css"

const Home = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setTask(res?.data.products);
        console.log(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.gridContainer}>
        {task.map((ele) => (
          <div key={ele.id} className={styles.card}>
            <h1>{ele.title}</h1>
            <img src={ele.images[0]} alt="" />
            <h2>{ele.name}</h2>
            <h5>{`Price: Rs${ele.price}`}</h5>
            <h6>{`Rating: ${ele.rating}`}</h6>
            <p style={{ fontSize: "10px" }}>{ele.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
