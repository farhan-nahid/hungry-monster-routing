import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import MealDetail from "./components/MealDetail/MealDetail";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/meal/:id" component={MealDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
