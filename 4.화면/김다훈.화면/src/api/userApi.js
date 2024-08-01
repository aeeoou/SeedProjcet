import axios from 'axios';

{/* userApi는 프론트엔드와 백엔드를 이어주는 다리다. 이 코드가 있기에 vs코드와 스프링부트에서 따로 작업해도 프론트단에서 백엔드 데이터를 출력시킬 수 있다. */}
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