import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from '../data/SideBarData';
import {channels} from '../data/SideBarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import {useHistory} from 'react-router-dom';


function SideBar(props) {

  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if(promptName != null){
      db.collection('rooms').add({
        name : promptName 
      })
    }
  };

  const history = useHistory();

  const goToChannel = (id) => {
    if(id){(
      history.push(`/room/${id}`))
    }};


  return (<Container>
      <WorkSpaceContainer>
        <Name>
          CleverProgrammer 
        </Name>
          <NewMessage>
           <AddCircleOutlineIcon/>
          </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {
          sidebarItemsData.map(item => (
            <MainChannelItem>
              {item.icon} 
              {item.text} 
            </MainChannelItem>
          ))
        }
      </MainChannels>
      <ChannelsContainer>
          <NewChannelContainer>
            <div>
              Channels
            </div>
            <AddIcon onClick = {addChannel}/>
          </NewChannelContainer>
          <ChannelsList>
            {
              props.rooms.map(item => (
              <Channel onClick = {() => goToChannel(item.id) } >
                #{item.name}
              </Channel>
              ))
            }
          </ChannelsList>
      </ChannelsContainer>
    </Container>);
}

export default SideBar;

const Container = styled.div`
    background-color : #3E014B ;
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

const MainChannels = styled.div``;

const MainChannelItem = styled.div`
  color : rgb(188,171,188);
  display : grid ;
  grid-template-columns : 15% auto ;
  height : 28px ;
  align-items : center ;
  padding-left : 19px ;
  cursor : pointer ;
  :hover {
    background : #350D36 ;
  }
`;

const ChannelsContainer = styled.div `
  color : rgb(188,171,188);
  margin-top : 10px ;
`;

const NewChannelContainer = styled.div`
  display : flex;
  justify-content : space-between ;
  align-items : center ;
  height : 20px ;
  padding-left : 19px ;
  padding-right : 12px ;
`;

const ChannelsList = styled.div`
`; 

const Channel = styled.div`
  height : 28px ;
  display : flex ;
  align-items : center ;
  padding-left : 19px ;
  cursor : pointer ;
  :hover {
    background : #350D36 ;
  }
`;