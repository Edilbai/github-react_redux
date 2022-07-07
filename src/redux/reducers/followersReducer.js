import { USERS_FOLLOWERS } from "./type";

const initialState = []
const followersReducer = (state=initialState, action) => {
const {type, payload} = action
switch(type){
    case USERS_FOLLOWERS:
        return payload
    default:
        return state
}
}
export default followersReducer;