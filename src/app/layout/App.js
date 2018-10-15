import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EvenDashboard";
import NavBar from "../../features/nav/NavBar";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/(.+)"
            render={() => (
              <div>
                <NavBar />
                <Container className="main">
                  <Switch>
                    <Route path="/events" component={EventDashboard} />
                    <Route path="/event/:id" component={EventDetailedPage} />
                    <Route path="/people" component={PeopleDashboard} />
                    <Route path="/profile/:id" component={UserDetailedPage} />
                    <Route path="/settings" component={SettingsDashboard} />
                    <Route path="/createEvent" component={EventForm} />
                  </Switch>
                </Container>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
