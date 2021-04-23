import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <h1>I am the chatpage</h1>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}
    
        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
