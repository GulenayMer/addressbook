const USER_NUMBERS_LIMIT = 20;
const FIELD_PARAMS='name,picture,email,cell';
export const GET_USERS_ENDPOINT = `https://randomuser.me/api/?results=${USER_NUMBERS_LIMIT}&inc=${FIELD_PARAMS}`