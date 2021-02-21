import * as axios from "axios";
import { Ip } from '../config';

const instance = axios.create({
    baseURL: Ip(),
})

export const signupPost = (userEmail, userPassword) => 
 instance.post('/user/create', { 
    email: userEmail,
    password: userPassword,
 }).then(res => {
    const user = res.data;
    console.log(user);
    return user;
 });