import axios from "axios";

export default class PostService{
    static async getAllDev() {
        const response = await axios.get()
    }

    static async getToken(user) {

        const response = await axios.post('http://localhost:8080/api/v1/auth/login' , user)
        return response
    }



}