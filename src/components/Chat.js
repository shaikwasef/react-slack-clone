import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Chat() {
  return (
    <Container>
    <HeaderSection>
      <Channel_name>
        <NameContainer>
          <Name>#clever</Name>
          <StarBorderIcon    style = {{fontSize : "medium"}}/>
        </NameContainer>
        <DetailsContainer>
          <Details>Details</Details>
          <InfoOutlinedIcon  />
        </DetailsContainer>
      </Channel_name>
      <Description> Company-wide announcements and work-based matters</Description>
      </HeaderSection>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
margin : 10px 15px 0px 15px ;`;

const HeaderSection = styled.div`
border-bottom : 2px solid #C1C1C1 ;`;

const Channel_name = styled.div`
display : flex ;
align-items : center ;
justify-content : space-between ;

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
margin-right : 10px ;
`;

const DetailsContainer = styled.div`
color : #C1C1C1;
display : flex ;
align-items : center ;
`;

const Description = styled.div`
color : #C1C1C1;
display : flex ;
align-items : center ;
margin-top : 10px ;
margin-bottom : 10px ;
`;

