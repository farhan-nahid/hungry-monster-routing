import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MealDetail from "./components/MealDetail/MealDetail";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/meal/:id" component={MealDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
