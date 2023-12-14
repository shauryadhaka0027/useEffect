// PaymentPage.js
import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa'; // Importing React Icons

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Simulate payment processing (you can replace this with actual API calls)
    // Set paymentSuccess to true to show success message
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <ChakraProvider>
      <Box
        p={{ base: 4, md: 8 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
        <VStack spacing={8} w={{ base: '90%', md: '50%', lg: '40%' }}>
          <Heading size="xl">Payment Information</Heading>

          {!paymentSuccess ? (
            <Box
              w="100%"
              padding={{ base: 4, md: 6 }}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
            >
              <FormControl>
                <FormLabel>
                  <Box as={FaCreditCard} mr={2} />
                  Card Number
                </FormLabel>
                <Input type="text" placeholder="Enter your card number" />
              </FormControl>

              <FormControl>
                <FormLabel>
               
                  Expiration Date
                </FormLabel>
                <Input type="text" placeholder="MM/YY" />
              </FormControl>

              <FormControl>
                <FormLabel>
                
                  CVC
                </FormLabel>
                <Input type="text" placeholder="Enter CVC" />
              </FormControl>

              <Button
                colorScheme="blue"
                mt="4"
                w="100%"
                leftIcon={<FaLock />}
                onClick={handlePayment}
              >
                Pay Now
              </Button>
            </Box>
          ) : (
            <Text fontSize="xl" color="green.500">
              Payment Successful!
            </Text>
          )}

          {!paymentSuccess && (
            <Text fontSize="sm" color="gray.500">
              Your payment information is secure.
            </Text>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Payment;
