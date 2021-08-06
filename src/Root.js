/* This is the Root component mainly initializes Redux and React Router. */

import React, { Suspense, useEffect, useState } from "react";
import Loadable from "react-loadable";
import Loading from "./features/home/Loading";
import { Provider, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
// import { hot, setConfig } from "react-hot-loader";
import store from "./common/store";
import routeConfig from "./common/routeConfig";
import history from "./common/history";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import Signin from "./features/urb/Signin";

// const Signin = Loadable({
//   loader: () =>
//     import(
//       "./features/urb/Signin" /* webpackChunkName: "Signin" */
//     ),
//   loading: Loading,
// })

// setConfig({
//   logLevel: "debug",
// });

function IsAuthedRoute({ item, newContextPath }) {
  const reduxState = useSelector((state) => state);
  const authed = reduxState.urb && !!reduxState.urb.auth;
  return (
    <Route
      key={newContextPath}
      component={item.component}
      // component={item.authed && !authed ? Signin : item.component}
      path={newContextPath}
      exact
    />
  )
}

function renderRouteConfigV3(routes, contextPath) {
  // Resolve route config object in React Router v3.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, "/");
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={(props) => (
            <item.component {...props}>{childRoutes}</item.component>
          )}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(IsAuthedRoute({ item, newContextPath }));
    } else if (item.childRoutes) {
      item.childRoutes.forEach((r) => renderRoute(r, newContextPath));
    }
  };

  routes.forEach((item) => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{children}</Switch>
    </Suspense>
  );
}

function Theme() {
  const children = renderRouteConfigV3(routeConfig, "/");
  // const reduxState = useSelector((state) => state); // redux state
  // const [theme, setTheme] = useState(null);
  // const [appliedTheme, setAppliedTheme] = useState(null);
  // const { urb } = reduxState;

  // useEffect(() => {
  //   if (theme !== urb.theme) {
  //     setTheme(theme, urb.theme);
  //     setAppliedTheme(
  //       createMuiTheme((urb && urb.theme && themes[urb.theme]) || themes.dark)
  //     );
  //   }
  // }, [urb, urb.theme, setTheme, theme]);

  return (
    <ConnectedRouter history={history}>
      {/* <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider> */}
      {children}
    </ConnectedRouter>
  )
}

function Root() {
  return (
    <Provider store={store}>
      <Theme />
    </Provider>
  );
}

const themes = {
  light: {
    palette: {
      type: "light",
    },
  },
  dark: {
    palette: {
      type: "dark",
    },
  },
};

export default Root;
// export default hot(module)(Root);
