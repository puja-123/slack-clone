import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignIn} from './';
function Home(){
  return <div>Home</div>
}
function Some(){
  return <div>Some</div>
}
class App extends Component{
  // return (
  //   <div className="App">
  //     Helloworld
  //     <SignIn />
  //   </div>
  // );
  render(){
    return(
    < div>
      {/* <SignIn /> */}
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/some" component={Some} />
      </Switch>
    </div> 
    );
  }
}

export default App;
