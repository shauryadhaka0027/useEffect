import React, { useContext, useState } from 'react';
import { ContextApi } from '../Context/ContextApiProvider';

const SignUp = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const { user, setUser } = useContext(ContextApi);
  const [task, setTask] = useState(initialForm);

  const reset = () => {
    setTask(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newform = { ...task };
    for (let i = 0; i < e.target.length; i++) {
      let input = e.target[i];
      if (input.id) {
        newform[input.id] = input.value;
      }
    }
    console.log(newform);
    setTask(newform);
    setUser(task);
    reset();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <input type="email" name="email" id="email" value={task.email} onChange={(e) => setTask({ ...task, email: e.target.value })} />
        <input type="password" name="password" id="password" value={task.password} onChange={(e) => setTask({ ...task, password: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
