import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
var firebaseConfig = require("../config/config").firebase[process.env.NODE_ENV];
// var firebaseApp = null
if (!window.firebaseApp)
  window.firebaseApp = initializeApp(firebaseConfig.config);
// import { useState } from 'react';
// console.log("making store");

var myFirestore = getFirestore();
// myFirestore.enablePersistence()
//   .catch(function (err) {
//     if (err.code === 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//       console.error('Multiple tabs open, persistence can only be enabled in one tab at a a time.')
//     } else if (err.code === 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//       console.error('The current browser does not support all of the features required to enable persistence')
//     }
//   });

export const firestore = myFirestore;
