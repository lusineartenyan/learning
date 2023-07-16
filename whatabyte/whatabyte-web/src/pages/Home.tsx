import React from "react";
import Text from "../components/ui/Text";

const Home = () => {
  return (
    <div className="grid-box wrapper">
      <div className="breadcrumb">
      <Text size="lg" color="primary" align="left">
        Home
      </Text>
      </div>
      <Text size="sm" color="primary" align="center">
        To start using the Dashboars, please signin.
      </Text>
    </div>
  );
};

export default Home;
