import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Chat() {
  return (
    <Container>
      <Description>
        <NameContainer>
          <Name>#clever</Name>
          <StarBorderIcon    style = {{fontSize : "medium"}}/>
        </NameContainer>
        <DetailsContainer>
          <Details>Details</Details>
          <InfoOutlinedIcon  />
        </DetailsContainer>
      </Description>
    </Container>
  );
}

export default Chat;

const Container = styled.div``;

const Description = styled.div`
display : flex ;
align-items : center ;
margin : 10px 10px 0px 10px ;
` ;

const NameContainer = styled.div`
display : flex ;
align-items : center ;
font-weight: bolder;
`;

const Name = styled.div`
  display : flex ;
  flex-wrap : wrap ;
  align-items : center ;
  font-size : 20px ;
`;

const Details = styled.div`
`;

const DetailsContainer = styled.div`
color : #C1C1C1;
display : flex ;
align-items : center ;
`;

