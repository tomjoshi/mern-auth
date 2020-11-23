import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { 
    SET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

// Register user
export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
    
}