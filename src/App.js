import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import MainNavigation from "./shared/navigation/MainNavigation";
import Blog from "./blog/pages/Blog";
import NewBlog from "./blog/pages/NewBlog";
import UpdateBlog from "./blog/pages/UpdateBlog";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/:userId/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/new" exact>
            <NewBlog />
          </Route>
          <Route path="/blog/:blogId">
            <UpdateBlog />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
