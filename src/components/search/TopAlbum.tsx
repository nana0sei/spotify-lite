import {
  Image,
  Badge,
  Card,
  CardBody,
  Heading,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  img?: string;
  name?: string;
  type?: string;
  link: string;
  artist?: string[];
}

const TopAlbum = ({ img, name, type, link, artist }: Props) => {
  return (
    <>
      <Link to={link}>
        <VStack spacing={2} align="flex-start" paddingY={2}>
          <Card
            bg="gray.800"
            borderRadius={10}
            minW="350px"
            _hover={{ bg: "gray.500" }}
          >
            <CardBody>
              <VStack spacing={2} align="flex-start">
                <Image src={img} boxSize="100px" />
                <Heading fontSize="3xl">{name}</Heading>
                <HStack spacing={5}>
                  <Text>{artist}</Text>
                  <Badge borderRadius={5}>{type}</Badge>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Link>
    </>
  );
};

export default TopAlbum;
