import { USER_BY_NAME } from "./type"

const initialState =[]
const userReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case USER_BY_NAME:
            return payload
        default:
            return state
    }
}

export default userReducer;