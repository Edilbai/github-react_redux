import { combineReducers } from "redux";
import followersReducer from "./followersReducer";
import followingsReducer from "./followingsReducer";
import reposReducer from "./reposReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    followings: followingsReducer,
    followers: followersReducer,
    repos: reposReducer,
})