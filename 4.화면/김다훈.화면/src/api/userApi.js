import axios from 'axios';

export const host = 'http://localhost:8000' //백엔드의 주소
const prefix = `${host}/user` //request mapping url이 user로 시작하도록 설정

export const userLogins = async userNo => {
    const response = await axios.get(`${prefix}/${userNo}`) //await은 userLogins함수가 call될때까지 작동안하고 기다리고있음.
    return response.data //response는 서버가 보내주는 응답을 받는 객체
}

export const userSignUp = async user => {
    const response = await axios.post(`${prefix}/add`, user)
    return response.data
}

export const sendSMS = async (u_phone ,cerNum) => {
    const response = await axios.post(`${prefix}/sendSMS`, cerNum, {
        params: {
            u_phone:u_phone
        }
    })
    return response.data
}

export const checkUserIdAvailability = (userId) => {
    return axios.get(`${prefix}/checkUserId/${userId}`)
};