import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from "connected-react-router";
import history from "./history";
import homeReducer from "../features/home/redux/reducer";
import devReducer from "../features/dev/redux/reducer";
import referralsReducer from "../features/referrals/redux/reducer";
import helpReducer from "../features/help/redux/reducer";
import { productionFeatures } from "../config/config";

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.
const isProduction = process.env.NODE_ENV === "production";

const reducerMap = {
  router: connectRouter(history),
  home: homeReducer,
  dev: devReducer,
  ...(isProduction && productionFeatures.referrals
    ? { referrals: referralsReducer }
    : {}),
  ...(isProduction && productionFeatures.help
    ? { referrals: helpReducer }
    : {}),
};

export default combineReducers(reducerMap);
