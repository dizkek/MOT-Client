export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SING_UP_REQUEST = 'SING_UP_REQUEST';
export const REG_PATTERNS = {
  email: /^[a-z\d]+@[a-z]{4,8}\.[a-z]{2,5}$/,
  name: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
  password: /^[a-z\d]{8,20}$/,
};
