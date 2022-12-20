import axios from "axios";
import {api} from "./Api";

export const Apiaxios=axios.create(
    {
        baseURL: api,
        headers:  {
            authorization :`Bearer ${localStorage.getItem("token")}`
    }
})
