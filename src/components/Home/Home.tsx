import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import AddUsers from "../sections/AddUsers/AddUsers";
import AddRelationship from "../sections/AddRelationship/AddRelationship";
import Seperation from "../sections/Seperation/Seperation";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggleNavbar} />
      <AddUsers />
      <AddRelationship />
      <Seperation />
    </div>
  );
};

export default Home;
