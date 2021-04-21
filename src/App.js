import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/user/home";
import Book from "./components/user/book.js";
import Admin from "./components/admin/admin";
import Open from "./components/admin/open";
import Close from "./components/admin/close";
import Error from "./error";
import { Update } from "./components/admin/update";
import { Reset } from "./components/admin/reset";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/book" exact component={Book} />
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/open" exact component={Open} />
        <Route path="/closed" exact component={Close} />
        <Route path="/update" exact component={Update} />
        <Route path="/reset" exact component={Reset} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
