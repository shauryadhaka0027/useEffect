import React from 'react';
import { useContext } from 'react';

import { Box, useToast, Text } from '@chakra-ui/react';
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
  Image,
} from '@chakra-ui/react';
import { ContextApi } from '../Context/ContextApiProvider';
import { useNavigate } from 'react-router-dom';

const Cart1 = () => {
  const toast = useToast();
  const { cart, setCart } = useContext(ContextApi);

  const handleDelete = (id) => {
    // Remove the item with the specified id from the cart
    const updatedCart = cart.filter((ele) => ele.ele.id !== id);
    setCart(updatedCart);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate=useNavigate()
 const pay=()=>{
  return navigate("/Payment")
 }
  return (
    <div>
      <Button ref={btnRef} colorScheme='whiteAlpha' variant='outline' color="black" onClick={onOpen}>
        Add to Cart
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Box>
            
                {cart.map((ele) => (
                  <Box
                    key={ele.ele.id}
                    borderWidth="1px"
                    borderRadius="md"
                    overflow="hidden"
                    height="250px"
                    width="100%"
                    mt={10}
                  >
                    <Image src={ele.ele.image} alt="" h="100px" w="100%" objectFit="cover" />
                    <Box p="4">
                      <Text fontSize="md" fontWeight="bold" mb="2">
                        {ele.ele.name}
                      </Text>
                      <Text fontSize="sm" fontWeight="semibold" color="blue.600" mb="2">
                        {`Price: $${ele.ele.price}`}
                      </Text>
                      <Text fontSize="sm" mb="2">
                        {ele.ele.title}
                      </Text>
                      <Button  onClick={() => handleDelete(ele.ele.id)} colorScheme="red">
                        Delete
                      </Button>
                    </Box>
                  </Box>
                ))}
            
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" colorScheme='blue' onClick={pay}>
              Check Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart1;
