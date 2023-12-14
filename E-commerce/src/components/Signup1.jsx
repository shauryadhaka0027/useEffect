import React from 'react';
import { useContext, useState } from 'react';
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
} from '@chakra-ui/react'
import { ContextApi } from '../Context/ContextApiProvider';

const Signup1 = () => {
  const toast = useToast()
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
    onClose();
  };
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
  return (
    <div>
      <Button ref={btnRef} colorScheme='blackAlpha' onClick={onOpen}>
        Signup
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
           <form onSubmit={(e) => handleSubmit(e)}>
          <DrawerBody>
            <label >Email</label>
          <Input type="email" name="email" id="email" value={task.email} onChange={(e) => setTask({ ...task, email: e.target.value })} />
          <label >Password</label>
        <Input type="password" name="password" id="password" value={task.password} onChange={(e) => setTask({ ...task, password: e.target.value })} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button    onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } type="submit" colorScheme='blue'>Sign Up</Button>
          </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Signup1
