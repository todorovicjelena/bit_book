import React from 'react';
import { Header } from '../app/Header';
import { PostFeed } from './pages/post/PostFeed'


//if not login display login.page 
//else 


class App extends React.Component {
  render() {


    return (

      <Header />
      <PostFeed />

    )
  }
}


export default App;
