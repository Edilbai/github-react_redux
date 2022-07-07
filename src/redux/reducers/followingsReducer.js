import { USERS_FOLLOWING } from "./type";

const initialState = []
const followingsReducer = (state=initialState, action) => {
const {type, payload} = action
switch(type){
    case USERS_FOLLOWING:
        return payload
    default:
        return state
}
}
export default followingsReducer;