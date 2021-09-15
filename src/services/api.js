import axios from "axios"

/* eslint-disable no-unused-vars*/
const URL = "https://health-balance-api.herokuapp.com/api/"

let token = null

let user = null

export function loginAxios2(email, password) {
    const serverPromise = axios.post(URL + "auth/login", {
        "email": email,
        "password": password
    })

    const tokenPromise = serverPromise.then(function (response) {
        token = response.data.accessToken
        user = response.data.user
    })

    return tokenPromise
}


export function loginAxios(email, password) {
    return axios.post(URL + "auth/login", {
        "email": email,
        "password": password
    })
        .then(function (response) {
            //handle success
            token = response.data.accessToken
            user = response.data.user
        })
}


export function login(email, password) {
    //to do - call the backend with axios/fetch
    return fetch(URL + "auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
        .then(response => {
            if (!response.ok) {
                //create error object and reject if not a 2xx response code
                let err = new Error("HTTP status code: " + response.status)
                err.response = response
                err.status = response.status
                throw err
            }
            return response.JSON()
        })
        .then(body => {
            token = body.accessToken
            user = body.user

            //return undefined
        })
}

export function getUserEmail() {
    if (user) {
        return user.email
    }
    return ""
}