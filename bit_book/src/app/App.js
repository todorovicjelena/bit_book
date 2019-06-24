import React from 'react';
import { Header } from '../app/Header';
import { MyProfile } from './pages/profil/MyProfile';


//if not login display login.page 
//else 


class App extends React.Component {
  render() {


    return (
      <>
        <Header />
        <MyProfile />
      </>
    )
  }
}


export default App;
