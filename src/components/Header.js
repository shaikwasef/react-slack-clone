import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search...." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>
        Harry Potter
        </Name>
        <UserImage>

        </UserImage>
      </UserContainer>
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.div`
  display: flex;
`;

const SearchContainer = styled.div``;

const Search = styled.div``;

const UserContainer = styled.div``;

export default Header;
