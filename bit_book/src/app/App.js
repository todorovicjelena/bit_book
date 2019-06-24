import React from 'react';
import { Header } from '../app/Header';
import { PostFeed } from './pages/post/PostFeed'
import { Users } from '../app/pages/profil/Users'


//if not login display login.page 
//else 


class App extends React.Component {
  render() {


    return (
      <>
        <Header />
        <PostFeed />


        <Users />
      </>
    )
  }
}


export default App;
