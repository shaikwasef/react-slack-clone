//Commented
import React from 'react' ;
import styled from 'styled-components';
import {auth,provider} from '../firebase';

//Login functional component
function Login(props){

  //SignIn method using sign In with pop up for google signIn
  const signIn = () => {
    //Using google provided described in firebase.js
    auth.signInWithPopup(provider)
    //Store the results in a newUser object
    .then((result)=> {
      const newUser = {
        name : result.user.displayName ,
        photo : result.user.photoURL 
      }
      //Set item 'user' of local Item storage to avoid refresh logout.
      //Key is the 'user'for the local storage
      localStorage.setItem('user',JSON.stringify(newUser));
      //Set item 'user' of local Item storage
      props.setUser(newUser);
    })
    //catch login error from google provider.
    .catch((error) => {
      alert(error.message)
    })
  }


  return (
    <Container>
      <Content>
      {/* Slack Image for login page */}
        <SlackImg src = "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
        <h1> Sign in Slack </h1>
        <SignInButton onClick= {()=>signIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}



export default Login ;

const Container = styled.div`
  width : 100% ;
  height : 100vh ;
  background-color : #f8f8f8;
  display : flex ;
  justify-content : center ;
  align-items : center ;
`;

const Content = styled.div`
  background : white ;
  padding : 100px ;
  border-radius : 5px ;
  box-shadow : 0 1px 3px rgb(0 0 0 / 12%) , 0 1px 2px rgb(0 0 0 / 24%) ;
  display : flex ;
  flex-direction : column ;
  justify-content : center ; 
  align-items : center ;
  font-family : system-ui ;
` ;

const SlackImg = styled.img`
  height : 100px ;
`;

const SignInButton = styled.button`
  margin-top : 50px ;
  background-color : #0a8d48;
  color : white ;
  border : none ; 
  height : 40px ;
  border-radius : 4px ;
  cursor : pointer ;
  font-size : 15px; 
`;

