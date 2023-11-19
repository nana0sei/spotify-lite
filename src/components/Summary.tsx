import { Text } from "@chakra-ui/react";

interface Props {
  children: string | null;
}

const Summary = ({ children }: Props) => {
  const limit = 40;

  if (!children) return null;

  if (children.length <= limit) return <Text fontSize="sm">{children}</Text>;

  const summary = children.substring(0, limit) + "...";
  return (
    <Text fontSize="sm" color="gray.500">
      {summary}
    </Text>
  );
};

export default Summary;
