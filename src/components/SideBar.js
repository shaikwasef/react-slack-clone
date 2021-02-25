import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function SideBar() {
  return (<Container>
      <WorkSpaceContainer>
        <Name>
          Clever Programmer 
        </Name>
          <NewMessage>
           <AddCircleOutlineIcon/>
          </NewMessage>
      </WorkSpaceContainer>
    </Container>);
}

export default SideBar;

const Container = styled.div`
  background : #3F0E40
`;

const WorkSpaceContainer = styled.div`
color : white;
height : 64px;
display : flex;
align-items : center ;
padding-left : 19px ;
justify-content : space-between ;
`;

const Name = styled.div`
`;

const NewMessage = styled.div`
  width : 36px ;
  height : 36px ;
  background-color : white ;
  color : #3F0E40 ;
  display : flex ;
  align-items : center ;
  justify-content : center ;
  border-radius : 50% ;
  margin-right : 20px ;
  cursor : pointer ;
`;
