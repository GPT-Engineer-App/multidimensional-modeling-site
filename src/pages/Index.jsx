import { Box, Container, Heading, Text, Button, Stack, Input, FormLabel, FormControl, useToast, VStack, HStack } from "@chakra-ui/react";
import { FaPlus, FaCube } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [dimension, setDimension] = useState("");
  const toast = useToast();

  const handleDimensionChange = (e) => setDimension(e.target.value);

  const handleSubmit = () => {
    if (isNaN(dimension) || dimension < 1) {
      toast({
        title: "Invalid Dimension",
        description: "Please enter a valid positive integer for the dimension.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Model Created",
        description: `A ${dimension}-dimensional model has been created successfully!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            n-Dimensional Model Creator <FaCube />
          </Heading>
          <Text mt={4}>Create your n-dimensional models with ease.</Text>
        </Box>

        <Stack
          as="form"
          spacing={4}
          width="100%"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="dimension">Enter Dimension (n)</FormLabel>
            <Input id="dimension" placeholder="e.g., 3 for a 3D model" value={dimension} onChange={handleDimensionChange} />
          </FormControl>

          <Button leftIcon={<FaPlus />} colorScheme="blue" type="submit">
            Create Model
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
