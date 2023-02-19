import React from "react";
import Navbar from "./components/Navbar";
import Server from "./components/GuildDisc/Server";

const Home = () => {
  return (
    <div className="flex bg=[#393943]">
      {/*Nav Bar / Friends / Servers*/}
      <Navbar />
      {/*Discover Communities / Server settings*/}
      <Server />
      {/*Main /  Featured servers*/}
    </div>
  );
};

export default Home;
