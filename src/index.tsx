import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { Cars, Learn, Shop } from "./components";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <ThemePicker>
        <Router>
          <Switch>
            <Route exact path="/" component={Cars} />
            <Route path="/learn/:id" component={Learn} />
            <Route path="/shop/:id" component={Shop} />
          </Switch>
        </Router>
      </ThemePicker>
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
