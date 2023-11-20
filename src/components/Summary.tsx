import { Text } from "@chakra-ui/react";

interface Props {
  children: string | null;
  limit: number;
  color?: string;
  fontSize?: string;
}

const Summary = ({ children, limit, color, fontSize }: Props) => {
  if (!children) return null;

  if (children.length <= limit)
    return <Text fontSize={fontSize}>{children}</Text>;

  const summary = children.substring(0, limit) + "...";
  return (
    <Text fontSize={fontSize} color={color}>
      {summary}
    </Text>
  );
};

export default Summary;
