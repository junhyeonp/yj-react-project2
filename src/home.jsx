import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const dataTour = [
  {
    text: "6월이벤트",
    image:
      "https://images.unsplash.com/photo-1684351080702-a89dd03a37cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    text: "7월 이벤트",
    image:
      "https://images.unsplash.com/photo-1684444161558-4d60556230a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    text: "8월 이벤트",
    image:
      "https://plus.unsplash.com/premium_photo-1675183690609-1672ce07849f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

const tourList = [
  {
    text: "팔공산 투어",
    image:
      "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    text: "서문시장 투어",
    image:
      "https://plus.unsplash.com/premium_photo-1683299266036-9e9b6c9d9152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    text: "3호선 투어",
    image:
      "https://images.unsplash.com/photo-1684346819553-11174cbc8f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    text: "알아서 투어",
    image:
      "https://plus.unsplash.com/premium_photo-1675183690609-1672ce07849f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

export default function Home() {
  return (
    <>
      <Layout>
        <VStack spacing={16} w="inherit" py="140px" px={4} alignItems="flex-start">
          {/* 최신상품 컨테이너 */}
          <VStack w="full">
            <Text fontWeight={600} fontSize={24}>
              최신상품
            </Text>
            <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={2} w="full">
              {tourList.map((item, i) => (
                <GridItem
                  key={i}
                  h="200px"
                  border="1px"
                  rounded="md"
                  borderColor="gray.300"
                  backgroundImage={`url(${item.image})`}
                  backgroundSize="cover"
                  backgroundPosition="center center"
                  position="relative"
                  overflow={"hidden"}
                >
                  <Link to={"/detail"}>
                    <Box position="abolute" top={0} left={0} w="full" h="full" bgGradient="linear(to-r, rgba(0,0,0,0.4), rgba(0,0,0,0.7))">
                      <Text color={"white"} position={"absolute"} w="full" bottom="0" align="center" fontWeight={600} py={4}>
                        {item.text}
                      </Text>
                    </Box>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </VStack>

          {/* 이벤트 컨테이너 */}
          <VStack w="full" alignItems="flex-start">
            <Text fontWeight={600} fontSize={24}>
              이벤트
            </Text>
            <Grid w="full" gap={4}>
              {dataTour.map((item, i) => (
                <GridItem
                  key={i}
                  rounded="lg"
                  w="full"
                  h="120px"
                  bg="yellow.200"
                  backgroundImage={`url(${item.image})`}
                  backgroundSize="cover"
                  backgroundPosition={"center center"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Link to="/detail">
                    <Box position={"absolute"} top={0} left={0} w="full" h="full" bgGradient={"linear(to-r, rgba(0,0,0,0.4), rgba(0,0,0,0.7))"}>
                      <Text
                        w="full"
                        align="center"
                        position={"absolute"}
                        top="50%"
                        left="50%"
                        transform={"translate(-50%, -50%)"}
                        fontWeight={600}
                        color="yellow.600"
                        fontSize={28}
                      >
                        {item.text} 10% 할인
                      </Text>
                    </Box>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
