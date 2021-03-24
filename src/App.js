import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Let's build a Tinder Clone App! 🚀</h1>
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chatpage</h1>
          </Route>
          <Route path="/">
            <h1>I am the homepage</h1>
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
