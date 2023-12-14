import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../Context/ContextApiProvider';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const Cartt = () => {
  const { cart, setCart } = useContext(ContextApi);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price when the component mounts or when the cart changes
    const newTotalPrice = cart.reduce((accumulator, ele) => accumulator + ele.ele.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const handleDelete = (id) => {
    // Remove the item with the specified id from the cart
    const updatedCart = cart.filter((ele) => ele.ele.id !== id);
    setCart(updatedCart);
  };

  return (
    <Box >
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="20px"
        mb="4"
      >
        {cart.map((ele) => (
          <Box
            key={ele.ele.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            height="350px"
            width="100%"
          >
            <Image src={ele.ele.image} alt="" h="200px" w="100%" objectFit="cover" />
            <Box p="4">
              <Text fontSize="lg" fontWeight="bold">
                {ele.ele.name}
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="blue.600">
                {`Price: $${ele.ele.price}`}
              </Text>
              <Text fontSize="sm" mt="2">
                {ele.ele.title}
              </Text>
              <Button onClick={() => handleDelete(ele.ele.id)} mt="2" colorScheme="red">
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Text fontSize="xl" fontWeight="bold" mb="2">
        Total Price: ${totalPrice}
      </Text>
    </Box>
  );
};

export default Cartt;
