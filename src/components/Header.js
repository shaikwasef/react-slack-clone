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
          <img src = "https://i.imgur.com/6VBx3io.png" />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color : #350d36;
  color : white;
  display : flex;
  align-items : center ;
  justify-content : space-between;
`;

const Main = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  min-width : 100px;
  width : 400px;
`;

const Search = styled.div`
  box-shadow : inset 0 0 0 1px rgb(104 74 104);
  width : 100% ;
  border-radius : 6px ;

  input { background-color : transparent ;
  border : none ;
  padding-right : 8px;
  padding-left : 8px ;
  color : white;}
`;

const UserContainer = styled.div`
  display : flex;
  align-items : center ;
`;

const Name = styled.div``;

const UserImage = styled.div``;

export default Header;
