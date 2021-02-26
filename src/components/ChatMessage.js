import React from "react";
import styled from "styled-components";

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src = "https://randomuser.me/api/portraits/men/6.jpg "/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Atal Narayan Sahu <span> 26/02/2021 9:50 PM </span>
                </Name>
                <Text>
                    How is the challenge 
                </Text>
            </MessageContent>
        </Container>
    );
}

export default ChatMessage ;

const Container = styled.div`
    padding : 8px 20px ;
    display : flex;
    align-items : center;
`;

const UserAvatar = styled.div`
    width : 36px ;
    height : 36px;
    border-radius : 2px ;
    overflow : hidden ;
    img {
        width : 100% ;
    }
    margin-right : 8px ;
`;

const MessageContent = styled.div`
display : flex ;
flex-direction : column ;
`;

const Name = styled.span`
    font-weight : 900 ;
    font-size : 15px ;
    line-height : 1.4;
    span {
        font-weight : 400 ;
        color : rgb(97,96,97);
        margin-left : 8px ;
        font-size : 13px ;
    }
` ;


const Text = styled.span``;