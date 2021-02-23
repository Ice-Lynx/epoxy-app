import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IceLynxLogo } from "./components/ice-lynx-logo.jsx";
import { DrawDot } from "./components/draw-dot.jsx";
import HomeLogo from "./home.svg";

/* CSS styles */
import "./styles/app.css";
import "./styles/header.css";
import "./styles/content-box.css";
import "./styles/footer.css";

const routes = [
  {
    path: "/",
    exact: true,
    extra: () => <div></div>,
    main: () => <div>Here goes home page content</div>,
  },
  {
    path: "/dot-app",
    extra: () => <div></div>,
    main: () => <DrawDot />,
  },
  {
    path: "/slider-app",
    extra: () => <div></div>,
    main: () => <div>Here goes slider app content</div>,
  },
];

export default function App() {
  return (
    <Router>
      <div class="wrapper">
        <div class="header">
          <Link to="/">
            <img src={HomeLogo} class="App-logo" alt="logo" />
          </Link>
          <Link to="/dot-app">
            <div class="header-button">Dots</div>
          </Link>
          <Link to="/slider-app">
            <div class="header-button">Sliders</div>
          </Link>
        </div>

        <div class="body">
          <div class="content-box">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
        <div class="footer">
          <IceLynxLogo />
          Ice Lynx © {new Date().getFullYear()}
        </div>
      </div>
    </Router>
  );
}
