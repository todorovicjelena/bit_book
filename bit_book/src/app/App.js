import React from 'react';
import { Header } from '../app/Header';
import { PostFeed } from './pages/post/PostFeed'
import { MyProfile } from './pages/profil/MyProfile';


//if not login display login.page 
//else 


class App extends React.Component {
  render() {


    return (
      <>
        <Header />
        <PostFeed />



        <MyProfile />
      </>
    )
  }
}


export default App;
