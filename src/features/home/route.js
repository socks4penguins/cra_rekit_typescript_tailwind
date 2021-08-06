/* eslint-disable import/no-anonymous-default-export */
import Loadable from "react-loadable";
import Loading from "./Loading";
import WelcomePage from "./WelcomePage";
import Help from "./Help";
import Terms from "./Terms";
import DefaultContent from "./DefaultContent";
// import Signin from "../urb/Signin";

// const FirestorePlayground = Loadable({
//   loader: () =>
//     import(
//       "../dev/FirestorePlayground" /* webpackChunkName: "FirestorePlayground" */
//     ),
//   loading: Loading,
// })
// const FirestoreLoadDocs = Loadable({
//   loader: () =>
//     import(
//       "../dev/docs/FirestoreLoadDocs" /* webpackChunkName: "FirestoreLoadDocs" */
//     ),
//   loading: Loading,
// })
// const FirestoreAddDocs = Loadable({
//   loader: () =>
//     import(
//       "../dev/docs/FirestoreAddDocs" /* webpackChunkName: "FirestoreAddDocs" */
//     ),
//   loading: Loading,
// })
// const FirestoreSetDocs = Loadable({
//   loader: () =>
//     import(
//       "../dev/docs/FirestoreSetDocs" /* webpackChunkName: "FirestoreSetDocs" */
//     ),
//   loading: Loading,
// })

let FirestorePlayground, Translations;
// if (process.env.NODE_ENV === "development") {
//   FirestorePlayground = require("../dev/FirestorePlayground").default;
//   Translations = require("../dev/Translations").default;

//   // FirestoreAdd = Loadable({
//   //   loader: () =>
//   //     import("../urb/FirestoreAdd" /* webpackChunkName: "FirestoreAdd" */),
//   //   loading: Loading,
//   // })
// } else {
//   FirestorePlayground = () => null;
// }

export default {
  path: "",
  component: WelcomePage,
  childRoutes: [
    // { component: WelcomePage, isIndex: true },
    // { path: "", component: DefaultContent },
    // { path: "signin", component: Signin },
    { path: "help", component: Help },
    { path: "terms", component: Terms },
    { path: "myPage", component: Help, authed: true },
    ...(process.env.NODE_ENV === "development"
      ? [
          // {
          //   path: "dev_demos",
          //   childRoutes: [
          //     { path: "Firestore_playground", component: FirestorePlayground },
          //   ],
          // },
          {
            path: "dev_docs",
            childRoutes: [
              // { path: "firestore_load", component: FirestoreLoadDocs },
              // { path: "firestore_add", component: FirestoreAddDocs },
              // { path: "firestore_set", component: FirestoreSetDocs },
            ],
          },
          {
            path: "translations",
            component: Translations,
          },
        ]
      : []),
  ],
};
