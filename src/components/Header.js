import React from "react";
import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
  return(
    <Container>
      <Main>
      <AccessTimeIcon />
      </Main>
      {/*<UserContainer>
      </UserContainer>*/}
    </Container>
  );
}


const Container = styled.div``;

const Main = styled.div``;

export default Header;

