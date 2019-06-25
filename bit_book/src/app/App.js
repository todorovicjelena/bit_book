import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Header } from '../app/Header';
import { PostFeed } from './pages/post/PostFeed'
import { Users } from '../app/pages/profil/Users'
import { UserDetails } from '../app/pages/profil/UserDetails'
import { PostDetails } from '../app/pages/post/PostDetails'
import { RegisterPage } from '../app/pages/RegisterPage'


//if not login display login.page 
//else 


class App extends React.Component {
  render() {


    return (
      <>
        <Header />
        <Switch>
          <Route path='/register/' component={RegisterPage} />
          <Route path='/people/:peopleId' component={UserDetails} />
          <Route path='/people' component={Users} />
          <Route path='/post/:postId' component={PostDetails} />
          <Route path='/posts/' component={PostFeed} />
          <Redirect to='/register/' />
        </Switch>
      </>
    )
  }
}


export default App;

