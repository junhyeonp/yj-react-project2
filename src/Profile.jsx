import { Box, Input, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack py="140px" alignItems={"flex-start"} px={4} spacing={6}>
        <Text fontWeight={700} fontSize={20}>
          무료상담신청
        </Text>
        <VStack w="full" alignItems={"flex-start"}>
          <Text>이름</Text>
          <Input placeholder="이름을 입력해 주세요"></Input>
        </VStack>
        <VStack w="full" alignItems={"flex-start"}>
          <Text>연락처</Text>
          <Input placeholder="연락처를 입력해 주세요"></Input>
        </VStack>
        <VStack w="full" alignItems={"flex-start"}>
          <Text>email</Text>
          <Input placeholder="이메일을 입력해 주세요"></Input>
        </VStack>
      </VStack>
    </Layout>
  );
}
