import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost";

function App() {
  return (
    <Router>
        <div className="App">
            <Header/>
            <main>
                <Switch>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/post/create">
                       <CreatePost/>
                    </Route>
                    <Route path="/">

                        <Feed />
                    </Route>

                </Switch>
            </main>


        </div>
    </Router>
  );
}

export default App;
