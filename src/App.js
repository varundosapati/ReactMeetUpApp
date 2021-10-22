import "./App.css";
import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/favorites" exact>
          <Favorites></Favorites>
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp></NewMeetUp>
        </Route>
        <Route path="/">
          <AllMeetups></AllMeetups>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
