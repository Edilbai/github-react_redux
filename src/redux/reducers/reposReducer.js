import { USERS_REPOS } from "./type";

const initialState = []
const reposReducer = (state=initialState, action) => {
const {type, payload} = action
switch(type){
    case USERS_REPOS:
        return payload
    default:
        return state
}
}
export default reposReducer;