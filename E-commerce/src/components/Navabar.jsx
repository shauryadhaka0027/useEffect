import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../css/Navbar.module.css"
import Signup1 from './Signup1'
import Login1 from './Login1'

const Navabar = () => {
  return (
    <div className={styles.container} >
      <div>
        <Link  className={styles.link}to="/">Home</Link>
      </div>
      <div>
        <Link  className={styles.link} to="/Product">Product</Link>
      </div>
      <div>
        <Link  className={styles.link} to="/cart">Cart</Link>
      </div>
      <div>
       <Signup1/>
      </div>
      <div>
        <Login1/>
      </div>
    </div>
  )
}

export default Navabar
