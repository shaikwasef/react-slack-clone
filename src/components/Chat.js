import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
  return (
    <Container>
      <NameContainer>
       <Name>  #Clever </Name>
       <Details> Details <InfoOutlinedIcon/> </Details>
      </NameContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
display : flex;
` ;
const NameContainer = styled.div`
display : flex ;
align - items : center ;
justify-content : space-between ; 
` ;
const Name = styled.div`` ;
const Details = styled.div`` ;