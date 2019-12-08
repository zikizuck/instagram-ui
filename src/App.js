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
import Register from "./Register/Register";
import Login from "./Login/Login";
import {Provider} from 'react-redux';
import store from './store';
import UserBox from "./Header/UserBox/UserBox";

function App() {
  return (
    <Provider store={store}>
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
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/">
                            <Feed />
                        </Route>

                    </Switch>
                </main>


            </div>
        </Router>
    </Provider>
  );
}

export default App;
