import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { ContextApi } from '../Context/ContextApiProvider';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  Grid,
  Flex,
  Input,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import Cart1 from '../components/Cart1';

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [task, setTask] = useState([]);
  const { isAuth, setCart, cart } = useContext(ContextApi);
  const [price, setPrice] = useState('');
  const [selects, setSelect] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false); // Define isAlertOpen state

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let res = await axios.get('https://fakestoreapi.com/products');
        setTask(res?.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!isAuth) {
      setIsAlertOpen(true);
    }
  }, [isAuth]);

  const low = () => {
    let sortedTasks = [...task];
    sortedTasks.sort((a, b) => a.rating.rate - b.rating.rate);
    setTask(sortedTasks);
  };

  const high = () => {
    let sortedTasks = [...task];
    sortedTasks.sort((a, b) => b.rating.rate - a.rating.rate);
    setTask(sortedTasks);
  };

  const handle = (e) => {
    setPrice(e.target.value);
  };

  const equal = () => {
    let filteredItems = [...task];

    if (price !== '') {
      filteredItems = filteredItems.filter((item) => item.price <= parseInt(price, 10));
    }

    if (selects === 'Equal') {
      filteredItems = filteredItems.filter((item) => item.price === parseInt(price, 10));
    } else if (selects === 'Above') {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (selects === 'Below') {
      filteredItems.sort((a, b) => b.price - a.price);
    }

    setTask([...filteredItems]);
  };

  const addclick = (obj) => {
    setCart([...cart, obj]);
    console.log(obj);
  };

  const onCloseAlert = () => {
    setIsAlertOpen(false);
  };
  useEffect(() => {
    if (!isAuth) {
      setIsAlertOpen(true);
    }
  }, []);

  if (!isAuth) {
    return (
      <>
       {/* <Navigate to="/"/> */}
        <AlertDialog isOpen={isAlertOpen} onClose={onCloseAlert}>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Please Sign Up
            </AlertDialogHeader>
            <AlertDialogBody>
              You need to sign up to access this feature. Click the Sign Up link.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={onCloseAlert}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }

  return (
    <div>
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'flex-start' }} justify="space-between" mb={4}>
        <Button onClick={low} fontSize={25} fontWeight={100} mb={{ base: 2, md: 0 }}>
          Low to High Rating
        </Button>
        <Button onClick={high} fontSize={25} fontWeight={100} mb={{ base: 2, md: 0 }}>
          High to Low Rating
        </Button>
        <Input
          type="text"
          name="rupees"
          value={price}
          onChange={handle}
          placeholder="Enter Price"
          mb={{ base: 2, md: 0 }}
          maxW={{ base: 'full', md: '150px' }}
        />
        <Select
          onClick={equal}
          value={selects}
          onChange={(e) => setSelect(e.target.value)}
          placeholder="Select Option"
          mb={{ base: 2, md: 0 }}
          maxW={{ base: 'full', md: '150px' }}
        >
          <option value="Equal">Equal</option>
          <option value="Above">Above</option>
          <option value="Below">Below</option>
        </Select>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {task.map((ele) => (
          <Card maxW={{ base: 'full', md: 'sm' }} key={ele.id}>
            <CardBody>
              <Image width="100%" height={{ base: 'auto', md: '150px' }} src={ele.image} alt={ele.name} borderRadius="m" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{ele.name}</Heading>
                <Text fontSize={10}>{ele.description}</Text>
                <Text color="blue.600" fontSize="2xl">{`Price: $${ele.price}`}</Text>
                <Text>{`Rating: ${ele.rating.rate}`}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/user/${ele.id}`}>Click to Detail</Link>
                </Button>
                <Button onClick={() => addclick({ ele })} variant="ghost" colorScheme="blue">
                  {<Cart1/>}
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
