import React , {useState} from "react";
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';

function ChatInput(props){

    //chat Input state
    const [input , setInput] = useState("");

    //The onClick function calls the input page
    const send =(e) => {
        e.preventDefault();
        if(!input) return ;
        //sendMessage (described in Chat) send the message data to the db for the attached channelId
        props.sendMessage(input);
        setInput("");
    }

    return (
        <Container>
            <InputContainer>
            <form>
                <input onChange = {(e) => (setInput(e.target.value))} value = {input}type = "text" placeholder = "Message here" />
                <SendButton onClick = {send} type = "submit">
                    <Send />
                </SendButton>
            </form>
            </InputContainer>
        </Container>
    );
}

export default ChatInput ;

const Container = styled.div`
padding-left : 20px;
padding-right : 20px ;
padding-bottom : 24px ;
`;

const InputContainer = styled.div`
border : 1px solid #8D8D8E;
border-radius : 4px ;
form {
    display : flex ;
    align-items : center ;
    height : 42px;
    padding-left : 10px ;
    input {
        flex : 1 ;
        border : none ;
        font-size : 13px;
    }
    input:focus {
        outline : none ;
    }
}
`;


const SendButton = styled.button`
    background : #007a5a ;
    border-radius : 2px ;
    width : 32px ;
    height : 32px ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    margin-right : 5px ;
    cursor : pointer ;
    border : none ;

    .MuiSvgIcon-root {
        width : 18px ;
    }

    :hover {
        background-color : #148657;
    }
`;

const Send = styled(SendIcon)`
    color : #D9D9D9;
`;