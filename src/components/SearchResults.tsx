import {
  Avatar,
  Badge,
  Card,
  CardBody,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";

const SearchResults = () => {
  const { q } = useParams();
  const { data, isLoading, error } = useSearch(q!);

  const topResult = data?.artists?.items[0];

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <VStack spacing={2} align="flex-start" paddingY={5}>
        <Heading fontSize="2xl">Top result</Heading>

        <Card bg="gray.800" borderRadius={10}>
          <CardBody>
            <VStack spacing={2} align="flex-start">
              <Avatar
                name={topResult?.name}
                src={topResult?.images[0].url}
                size="2xl"
              />
              <Heading fontSize="3xl">{topResult?.name}</Heading>

              <Badge borderRadius={5}>{topResult?.type}</Badge>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </>
  );
};

export default SearchResults;
