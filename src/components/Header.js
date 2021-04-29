//Commented
import React , {useState} from "react";
import styled , {Themeprovider} from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";


function Header ({user ,signOut , darkMode}) {

  //Set the theme of the header 
  const [headerTheme , setHeaderTheme] = useState("#350d36");

  // change look of the theme on darkMode toggle
  const changeLook = () => {
    //Set theme for header
     (headerTheme =="#350d36") ? setHeaderTheme("black") : setHeaderTheme("#350d36");
     //call the darMode() function of header
     darkMode();
  };

  return (
   /* {headerTheme is changed to black }*/
    <Container background = {headerTheme}>
      <CheckBoxWrapper>
        <CheckBox  id="checkbox" type="checkbox" onChange = {changeLook} />
        <CheckBoxLabel title = "Toggle theme" htmlFor="checkbox"  />
      </CheckBoxWrapper>
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
          {user.name}
        </Name>
        <UserImage onClick = {signOut}>
          <img src = {user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} />
        </UserImage>
      </UserContainer>

    </Container>
  );
}

const Container = styled.div`
  background-color : ${props => props.background ? props.background : "#350d36"}; 
  color : white;
  display : flex;
  align-items : center ;
  justify-content : center;
  position : relative ;
  box-shadow : 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin-right : 16px ;
  margin-left : 16px;
`;

const SearchContainer = styled.div`
  min-width : 400px;
  margin-left : 16px ;
  margin-right : 16px ;
`;

const Search = styled.div`
  box-shadow : inset 0 0 0 1px rgb(104 74 104);
  width : 100% ;
  border-radius : 6px ;
  display : flex ;
  align-items : center;

  input { background-color : transparent ;
  border : none ;
  padding-right : 8px;
  padding-left : 8px ;
  padding-top : 4px ;
  padding-bottom : 4px ;
  color : white;}

  input:focus {
    outline : none;
  }
`;

const UserContainer = styled.div`
  display : flex;
  align-items : center ;
  padding-right : 16px;
  position : absolute ;
  right : 0 ;
`;

const Name = styled.div`
margin-right : 10px ;`;

const UserImage = styled.div`
  width : 28px ;
  height : 28px ;

  border : 2px solid white ;
  border-radius : 3px ;

  img {
    width : 100% ;
  }
  cursor : pointer ;
`;

const CheckBoxWrapper = styled.div`
  position: absolute;
  left : 10px ;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px ;
  background: #b3b3b3;
  border : 2px solid red;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #000000;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default Header;

