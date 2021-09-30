import { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//Components
import Header from "./components/Header";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Post from './pages/Post';
function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
      <button onClick={() => setLogin(!login)}>{login ? "Logout" : "login"}</button>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile">
          {login ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="/post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
