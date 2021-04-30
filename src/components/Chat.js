//Comments
import React , {useEffect , useState} from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase'
import {useParams} from "react-router-dom";
import firebase from 'firebase'

//Chat component
function Chat(props) {

  //channelID is loaded with history.push() in the URL by SideBar.js and useParams then utilises the ID of the URL
  let {channelId} = useParams(); //Need to add :channelId in route path
  
  const [ channel , setChannel ] = useState();
  const [messages , setMessages] = useState([]);
  
  //Gets the channel data for channelID fetched using useParams()
  const getChannel = () => {
    db.collection('rooms').doc(channelId).onSnapshot((snapshot) => {
      setChannel(snapshot.data());
    })
  }

  //getsMessages from the friebase database for the channel ID fetched using useParams
  const getMessages = () => {
    db.collection('rooms').doc(channelId).collection('messages').orderBy('timeStamp','asc').onSnapshot((snapshot) => {
      let messages = snapshot.docs.map((doc) => doc.data());
      setMessages(messages);
    })
  }

  //sendMessage function is used to add payload and send data to the database of the channelId
  //sendMessage is passed as a prop to the chat Input component
  const sendMessage = (text) => {
    if(channelId){
      let payload = {
        text : text ,
        user : props.user.name ,
        userImage : props.user.photo ,
        timeStamp : firebase.firestore.Timestamp.now()
      }
      db.collection('rooms').doc(channelId).collection('messages').add(payload);
    }
  }

  //UseEffect will run the functions getChannel and getMessages for any change in channelId
  useEffect(() => {
      getChannel();
      getMessages();
      },[channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            # {channel && channel.name}
          </ChannelName>
          <ChannelInfo>
          Your favourite Channel
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>
            Details
          </div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {
          messages.length > 0 &&
          messages.map((data,index) => (
              <ChatMessage 
              text = {data.text}
              name = {data.user}
              image = {data.userImage}
              timeStamp = {data.timeStamp}
              />
          ))
        }
      </MessageContainer>
      <ChatInput sendMessage = {sendMessage}/>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`;

const Header = styled.div`
padding-left : 20px ;
padding-right : 20px ;
display : flex ;
align-items : center ;
border-bottom : 1px solid rgba(83,39,83,.13) ;
justify-content : space-between;
`;

const MessageContainer = styled.div`
  display : flex ;
  flex-direction : column ;
  overflow-y : scroll ;
`;



const ChannelDetails = styled.div`
display : flex ;
align-items : center ;
color : #606060 ;
`;

const ChannelName = styled.div`
font-weight : 700`;

const Channel= styled.div``;

const ChannelInfo = styled.div`
font-weight : 400 ;
color : #606060 ;
font-size : 13px ;
margin-top : 8px ;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left : 10px ;
`; 

