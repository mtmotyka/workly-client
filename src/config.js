export const BACKEND_URL = "https://mikovskycloud.com/workly";
export const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,64}$/; //8-64 signs, at least one number, one lowercase, one uppercase, no spaces
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
