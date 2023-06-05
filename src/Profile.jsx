import { Box, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack py="140px" alignItems={"flex-start"} px={4}>
        <Text fontWeight={700} fontSize={20}>
          무료상담신청
        </Text>
      </VStack>
    </Layout>
  );
}
