import { Card } from "@chakra-ui/react";
import UpperNav from "./UpperNav";

const Navbar = () => {
  return (
    <>
      <Card pos="fixed">
        <UpperNav />
      </Card>
    </>
  );
};

export default Navbar;
