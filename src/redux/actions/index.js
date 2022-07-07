import axios from "axios"
import { API } from "../config"
import { USERS_FOLLOWERS, USERS_FOLLOWING, USERS_REPOS, USER_BY_NAME } from "../reducers/type";


// ========GitHubUser============
export const getUser = (name) => {
    return async(dispatch)=>{
        const res = await axios.get(API+name);
        dispatch({
            type: USER_BY_NAME, 
            payload: res.data
        })
    }
}

// ===========Followers========
export const getFollowers = (name) => {
    return async(dispatch)=>{
        const res = await axios.get(API+name+'/followers');
        dispatch({
            type: USERS_FOLLOWERS, 
            payload: res.data
        })
    }
}

// ===========Repos========
export const getRepos = (name) => {
    return async(dispatch)=>{
        const res = await axios.get(API+name+'/repos');
        dispatch({
            type: USERS_REPOS, 
            payload: res.data
        })
    }
}

// ===========Following========
export const getFollowing = (name) => {
    return async(dispatch)=>{
        const res = await axios.get(API+name+'/following');
        dispatch({
            type: USERS_FOLLOWING, 
            payload: res.data
        })
    }
}