import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Header } from '../app/Header';
import { PostFeed } from './pages/post/PostFeed'
import { Users } from '../app/pages/profil/Users'
import { UserDetails } from '../app/pages/profil/UserDetails'
import { PostDetails } from '../app/pages/post/PostDetails'
import { Login } from './pages/Login'
import { RegisterPage } from '../app/pages/RegisterPage'


//if not login display login.page 
//else 


class App extends React.Component {
  constructor(props) {
    super(props)

    const registerToken = localStorage.getItem('accessToken')
    const token = registerToken ? registerToken : null
    console.log(token);
    console.log(registerToken);

    this.state = {
      token
    }
  }
  render() {

    const { token } = this.state
    console.log(token);

    if (!token) {
      return (
        <>
          <Switch>

            <Route path='/register/' component={RegisterPage} />
            <Route path="/login/" component={Login} />
            <Redirect to='/register' />
          </Switch>
        </>
      )


    }
    return (

      <>

        <Header />
        <Switch>
          <Route path='/people/:peopleId' component={UserDetails} />
          <Route path='/post/:postId' component={PostDetails} />
          <Route path='/people' component={Users} />
          <Route path='/posts/' component={PostFeed} />
          <Redirect to='/people' />
        </Switch>
      </>
    )
  }
}


export default App;

