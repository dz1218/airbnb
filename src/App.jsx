import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";

import AppFooter from "./components/appFooter";
import AppHeader from "./components/appHeader";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
