/* eslint-disable import/no-anonymous-default-export */
import Loadable from "react-loadable"
import Loading from "../home/Loading"
import Docs from "./docs/Content"
import Tools from "./tools/Content"
// import FirestoreSetDev from "./FirestoreSetDev";
// import FirestoreAddDev from "./FirestoreAddDev";
// import FirestoreLoadDev from "./FirestoreLoadDev";
// import FirestorePlayground from "./FirestorePlayground";
import FirestoreLoadDocs from "./docs/FirestoreLoadDocs"
import FirestoreAddDocs from "./docs/FirestoreAddDocs"
import FirestoreSetDocs from "./docs/FirestoreSetDocs"
// import ToDo from "./demos/ToDo";
// import Ws2Files from "../urb/Ws2Files"
import BlocklyBuilder from "./BlocklyBuilder"
import BlocklyTest from "./BlocklyTest"
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// const Preview = Loadable({
//   loader: () => import("./Preview" /* webpackChunkName: "Preview" */),
//   loading: Loading,
// })

const MultiPreview = Loadable({
  loader: () => import("./MultiPreview" /* webpackChunkName: "Preview" */),
  loading: Loading,
})

export default {
  path: "dev",
  childRoutes: [
    { path: "blockly_test", component: BlocklyTest },
    {
      path: "blockly_builder",
      childRoutes: [
        { path: ":project/:fileName", component: BlocklyBuilder, authed: true },
      ],
    },
    { path: "multi_preview", component: MultiPreview },
    // { path: "preview", component: Preview, authed: true },
    // {
    //   path: "ws2files",
    //   component: Ws2Files,
    //   // component: React.cloneElement(Ws2Files, { debug: true }, null),
    // },
    { path: "docs", component: Docs },
    // {
    //   path: "demos",
    //   // component: Docs,
    //   childRoutes: [{ path: "todos", component: ToDo, authed: true }],
    // },
    { path: "tools", component: Tools },
    // { path: "FirestoreSet", component: FirestoreSetDev },
    // { path: "FirestoreLoad", component: FirestoreLoadDev },
    // { path: "FirestoreAdd", component: FirestoreAddDev },
    // { path: "firestore_playground", component: FirestorePlayground },
    { path: "firestore_load", component: FirestoreLoadDocs },
    { path: "firestore_add", component: FirestoreAddDocs },
    { path: "firestore_set", component: FirestoreSetDocs },
  ],
}
