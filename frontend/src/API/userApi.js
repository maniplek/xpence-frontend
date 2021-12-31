import axios from 'axios';
import { baseURL } from '../config/index';
import axiosConfig from '../config/axiosInstance'
export function signUpApi(userDetails){
    return axios.post(`${baseURL}/api/users/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function loginApi(userDetails){
    return axios.post(`${baseURL}/api/login/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function create_accountApi(userDetails){
    return axios.post(`${baseURL}/api/create_account/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function create_categoryApi(userDetails){
    return axios.post(`${baseURL}/api/create_category/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function create_expenseApi(userDetails){
    return axios.post(`${baseURL}/api/create_expense/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function create_incomeApi(userDetails){
    return axios.post(`${baseURL}/api/create_income/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function change_passwordApi(userDetails){
    return axios.post(`${baseURL}/api/change_password/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export function get_transactions_by_rangeApi(userDetails){
    return axios.post(`${baseURL}
    ​/api​/get_transactions_by_range​/`, userDetails).then((data) => data).catch((error) => {return error.response.data;});
};

export const getAlltransactionApi = () => {
    return axios.get(`${baseURL}
    ​//api/get_transactions/`, axiosConfig).then((data) => data).catch((error) => {return error.response.data;});
}