import { Heading, Box, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorMessage = () => {
  const error = useRouteError();

  return (
    <Box padding={5}>
      <Heading>Oops...</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occured."}
      </Text>
    </Box>
  );
};

export default ErrorMessage;
