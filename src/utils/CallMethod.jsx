import axios from "axios"

class ApiCalls {
    async userLogIn(email, password, rememberMe) {
        console.log(email, password);
        return axios.post('http://localhost:3001/api/v1/user/login', {
            "email": email,
            "password": password
        })
        .then(function (response) {
            if (response.data.body.token) {
                if (rememberMe) {
                    sessionStorage.setItem("JWT", response.data.body.token)
                }
                console.log("Mon token de connexion est: " + response.data.body.token);
                return response
            }
        })
        .catch(function (error) {
            if (error.response) {
                return error.response.data
            }
        });
    }

    async getUserProfileData(JWT) {
        return await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
            headers: {
                Authorization: "Bearer " + JWT
            }
        })
        .then(function (response) {
            return response
        })
        .catch (function (error) {
            return error
        }) 
    }

    async updateUserProfileData(firstName, lastName, JWT) {
        return await axios.put("http://localhost:3001/api/v1/user/profile", {
            firstName,
            lastName
        },
        {
            headers: {
                Authorization: "Bearer " + JWT
            }
        })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        })
    }   
}
  
export default ApiCalls;