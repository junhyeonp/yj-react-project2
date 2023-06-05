import { Avatar, VStack, Text, HStack, Box } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack as={"form"} w="full" bg="gray.400" minH="100vh" py="140px" alignItems={"flex-center"} px={4}>
        <VStack spacing={6}>
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            size="xl"
            color="black"
            bg="white"
            name="박준현"
          />
          <VStack spacing={0}>
            <Text fontSize="20" fontWeight="600">
              박준현
            </Text>
            <Text fontSize="14">풀스택 개발자를 꿈꾸는 박준현</Text>
          </VStack>
          <HStack w="80%" spacing="4">
            <Box border="1px" rounded="xl" px="20px" py={"1"} w="140px" align="center" color="yellow.600" fontSize={14}>
              CONTACT
            </Box>
            <Box border="1px" rounded="xl" px="20px" py="1" w="140px" align="center" color="red.600" fontSize={14}>
              FOLLOW
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
