import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, HStack, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { Search2Icon } from "@chakra-ui/icons";

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = () => (
  <InputGroup maxWidth="320px">
    <InputLeftElement
      pointerEvents="none"
      children={<Search2Icon color="gray.500" />}
    />
    <Input variant="filled" placeholder="Search . . ." />
  </InputGroup>
);

const Nav = () => {
  return (
    <Box position="fixed" top="0" left="0" zIndex="999" padding="2">
      <HStack>
        <Logo>
          <Text>Logo</Text>
          {/* <Image src="" alt="logo" /> */}
        </Logo>
        <Search />
      </HStack>
    </Box>
  );
};

export default Nav;
