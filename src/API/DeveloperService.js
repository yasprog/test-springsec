import axios from "axios";

const serv = 'http://localhost:8080/'
export default class DeveloperService {

    static async getAllDev(token) {
        // const {token} = useContext(AuthContext)


        try {
            let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
            const response = await axios.get(serv + 'api/v1/developers/', config)
            return response.data
        }
        catch (e) {
            console.log(e)
        }

    }



    static async getToken(user) {

        const response = await axios.post(serv +'api/v1/auth/login' , user)
        return response
    }



}