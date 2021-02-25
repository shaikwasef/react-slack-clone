import React from "react";
import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  return(
    <Container>
      <Main>
      <AccessTimeIcon />
      <HelpOutlineIcon/>
      <SearchContainer>
        <Search>
          <input type ="text" placeholder = "Search...." />
        </Search>
      </SearchContainer>
      </Main>
      {/*<UserContainer>
      </UserContainer>*/}
    </Container>
  );
}


const Container = styled.div``;

const Main = styled.div``;

const SearchContainer = styled.div``;

const Search = styled.div``;

export default Header;

