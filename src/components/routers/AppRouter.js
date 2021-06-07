import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CalendarScreen } from "../calendar/CalendarScreen";
import { HomeScreen } from "../home/HomeScreen";
import { Navbar } from "../navbar/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={HomeScreen} />
          <Route path="/mern-calendar" exact component={CalendarScreen} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}
