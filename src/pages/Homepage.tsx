import { Heading } from "@chakra-ui/react";

const Homepage = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "Hello";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
      <Heading fontSize="3xl" paddingX={5}>
        {greeting}
      </Heading>
    </>
  );
};

export default Homepage;
