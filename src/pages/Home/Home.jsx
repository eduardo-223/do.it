import React from "react";
import { Container, Content } from "./Style";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          Do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={()=> handleNavigation("/singup")} whiteSchema>Cadastre-se</Button>
          <Button onClick={()=> handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
