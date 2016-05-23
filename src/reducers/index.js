import {combineReducers} from "redux";
import config from "./config";
import system from "./system";
import buckets from "./buckets";

export default combineReducers({
  config,
  system,
  buckets
});
