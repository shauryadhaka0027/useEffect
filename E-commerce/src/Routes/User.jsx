import React, { useContext, useEffect, useState } from 'react';
import { Box, Text, Image, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ContextApi } from '../Context/ContextApiProvider';

const User = () => {
  const { id } = useParams();
  const { isAuth } = useContext(ContextApi);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [task, setTask] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setTask(res?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (!isAuth) {
    // Redirect or show a message for non-authenticated users
    return <Navigate to="/" />;
  }

  return (
    <Box mt={30}>
      
      {task && (
        <Box

          key={task.id}
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          mb="4"
          maxW="350px"
          mx="auto"
        >
          <Image src={task.image} alt="" h="300px" w="100%" objectFit="cover" />
          <Box p="4">
            <Text fontSize="lg" fontWeight="bold">
              {task.category}
            </Text>
            <Text fontSize="md" fontWeight="semibold" color="blue.600">
              {`Price: $${task.price}`}
            </Text>
            <Text fontSize="sm" mt="2">
              {task.description}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default User;
