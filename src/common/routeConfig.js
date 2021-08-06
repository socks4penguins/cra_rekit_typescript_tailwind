import { App } from "../features/home";
// import { find } from "lodash-es";
import { productionFeatures } from "../config/config";
import PageNotFound from "../features/home/PageNotFound";
import homeRoute from "../features/home/route";
import devRoute from "../features/dev/route";
import referralsRoute from "../features/referrals/route";
import helpRoute from "../features/help/route";

// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes config for new features, and remove config when remove features, etc.
const isProduction = process.env.NODE_ENV === "production";

// this doesn't work - Page not found
// let devRoute;
// if (!isProduction || (isProduction && productionFeatures.dev)) {
//   devRoute = require("../features/dev/route");
// } else {
//   devRoute = () => null;
// }

const childRoutes = [
  ...[
    !isProduction || (isProduction && productionFeatures.dev) ? devRoute : [],
  ],
  // ...[
  //   !isProduction || (isProduction && productionFeatures.urbRoute)
  //     ? urbRoute
  //     : [],
  // ],
  ...[
    !isProduction || (isProduction && productionFeatures.referrals)
      ? referralsRoute
      : [],
  ],
  ...[
    !isProduction || (isProduction && productionFeatures.help) ? helpRoute : [],
  ],
];

const routes = [
  {
    path: "/",
    component: App,
    childRoutes: [
      ...childRoutes,
      {
        path: "",
        component: homeRoute.component,
      },
      { path: "*", name: "Page not found", component: PageNotFound },
    ].filter((r) => r.component || (r.childRoutes && r.childRoutes.length > 0)),
  },
];

//  Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
// function handleIndexRoute(route) {
//   if (!route.childRoutes || !route.childRoutes.length) {
//     return;
//   }

//   const indexRoute = find(route.childRoutes, (child) => child.isIndex);
//   if (indexRoute) {
//     const first = { ...indexRoute };
//     first.path = "";
//     first.exact = true;
//     first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
//     route.childRoutes.unshift(first);
//   }
//   route.childRoutes.forEach(handleIndexRoute);
// }

// routes.forEach(handleIndexRoute);
export default routes;
