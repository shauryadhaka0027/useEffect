import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import { ContextApi } from '../Context/ContextApiProvider';

const Login1 = () => {
    const toast = useToast()
  const { user, isAuth, setIsAuth } = useContext(ContextApi);
  const initialForm = {
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === form.email && user.password === form.password) {
      console.log('login');
      toast({
        title: 'Log in Sucessfull',
        description: "We've Login.",
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
      onClose();
      setIsAuth(true);
    } else {
      
      toast({
        
        title: 'Password InCorrect',
        description: "Login Not sucessfull.",
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button ref={btnRef} colorScheme='whiteAlpha' variant='outline' color="black" onClick={onOpen}>
        Login
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Please Login Here</DrawerHeader>
          <form onSubmit={handleSubmit}>
            <DrawerBody>
                <label > Email</label>
              <Input type="email" name="email" id="email" onChange={handleChange} />
              <label>Password</label>
              <Input type="password" name="password" id="password" onChange={handleChange} />
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme='blue'>
                Login
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Login1;
