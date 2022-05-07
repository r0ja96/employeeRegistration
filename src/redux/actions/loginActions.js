import { LOGIN_FIELDS } from "../constants";

export const setLoginFields = (loginFields) => ({
    type:LOGIN_FIELDS,
    payload: loginFields
});