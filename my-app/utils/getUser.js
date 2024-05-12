
let token = null;
let userId = null;
export const setToken = (newToken) => {
    token = newToken;
};

export const getToken = () => {
    return token;
};

export const setUserId = (newUserId) =>{
    userId=newUserId;
}
export const getUserId = () =>{
    return userId;
}



