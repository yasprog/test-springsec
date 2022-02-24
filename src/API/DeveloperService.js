import axios from "axios";

const serv = 'http://localhost:8080/'
export default class DeveloperService {

    static async getAllDev(token) {
        // const {token} = useContext(AuthContext)
            let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
            const response = await axios.get(serv + 'api/v1/developers/', config)
            return response.data
    }



    static async delById(id, token) {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        console.log('удаление DevService')
        const response = await axios.delete(serv +'api/v1/developers/' + id, config)
        return response.status
    }

    static async addDev(developer, token) {

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        const response = await axios.post(serv +'api/v1/developers/' , developer, config)
        return response
    }


    static async getToken(user) {

        const response = await axios.post(serv +'api/v1/auth/login' , user)
        return response
    }



}