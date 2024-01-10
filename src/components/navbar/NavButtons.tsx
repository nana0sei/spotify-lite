import { HStack, Box } from "@chakra-ui/react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate();

  return (
    <>
      <HStack spacing={2} py={2}>
        <Box onClick={() => navigate(-1)}>
          <AiOutlineLeftCircle size="30px" />
        </Box>
        <Box onClick={() => navigate(+1)}>
          <AiOutlineRightCircle size="30px" />
        </Box>
      </HStack>
    </>
  );
};

export default NavButtons;
