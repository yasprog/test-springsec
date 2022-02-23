import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../context";
const serv = 'http://localhost:8080/'
export default class DeveloperService {

    static async getAllDev(props) {
        // const {token} = useContext(AuthContext)
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': props
            }
        }


        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Authorization': props}
        // console.log(headers)
        const response = await axios.get(serv + 'api/v1/developers/', config)
    }

    static async getToken(user) {

        const response = await axios.post(serv +'api/v1/auth/login' , user)
        return response
    }



}