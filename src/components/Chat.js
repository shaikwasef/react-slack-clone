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

const Container = styled.div`` ;
const NamedContainer = styled.div`` ;