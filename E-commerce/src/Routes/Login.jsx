import React, { useContext, useState } from 'react';
import { ContextApi } from '../Context/ContextApiProvider';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { user, isAuth, setIsAuth } = useContext(ContextApi);
  const initialForm = {
    email: '',
    password: ''
  };
  const [form, setForm] = useState(initialForm);

  const handleChange=(e)=>{
   setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   

    if (user.email === form.email && user.password === form.password) {
      console.log('login');
      setIsAuth(true);
    } else {
      alert('Invalid login credentials. Please sign up.');
    }
  };

   
if(isAuth){
  return <Navigate to="/Product"/>
}
  return (
    <div>
      <form  onSubmit={handleSubmit}>
                                                
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
