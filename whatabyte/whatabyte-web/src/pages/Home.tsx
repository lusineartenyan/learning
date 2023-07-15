import React from "react";
import Text from "../components/ui/Text";

const Home = () => {
  return (
    <div className="grid-box wrapper">
      <Text as="h1" size="lg" color="secondary">
        Home
      </Text>
      <Text size="sm" color="secondary">
        To start usin the Dashboars, please signin.
      </Text>
    </div>
  );
};

export default Home;
