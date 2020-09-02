import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Button,
  Header,
  MainWrapper,
  InterativeList,
  Users,
  Imagem,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Imagem />
      <MainWrapper>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Button text="Clique aqui :D" />}
            />
            <Route path="/example-2" component={InterativeList} />
            <Route path="/example-3" component={Users} />
          </Switch>
        </Router>
      </MainWrapper>
    </div>
  );
}

export default App;
