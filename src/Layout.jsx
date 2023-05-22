import { Text, Button, Box, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box display="flex" justifyContent="center" alignItems="center" w="inherit" h="120px" bg="black" position="fixed" top={0} zIndex={"9"}>
            <AiFillApple size={32} color="white" />
          </Box>

          {/* 본문 */}
          {children}

          {/* tail */}
          <Box w="inherit" h="120px" bg="black" position="fixed" bottom={0}>
            <HStack h="inherit" justifyContent="space-between" alignItems="center">
              <Link to="/">
                <VStack w="full">
                  <AiFillHome color="white" />
                  <Text color="white">홈</Text>
                </VStack>
              </Link>
              <Link to="/profile">
                <VStack w="full">
                  <AiFillProfile color="white" />
                  <Text color="white">프로필</Text>
                </VStack>
              </Link>
              <Link to="/contact">
                <VStack w="full">
                  <AiFillContacts color="white" />
                  <Text color="white">연락처</Text>
                </VStack>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
