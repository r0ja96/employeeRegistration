import { LOGIN_FIELDS } from "../constants";

const initialLoginState = {
    email:'',
    password:''
}

export const loginFields = (state = initialLoginState, action={}) =>{
    switch (action.type) {
        case LOGIN_FIELDS:
            return {...state, email: action.payload.email,password:action.payload.password };

        default:
            return state;
    }
}