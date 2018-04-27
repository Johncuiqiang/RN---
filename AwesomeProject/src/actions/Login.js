import * as types from '../constant/ActionTypes';
//模拟服务器返回的用户信息
let user = {
  'name':'admin',
  'age':'24'
};

export function doLogin() {
    return dispatch => {
    dispatch(isLogining());
    let result = fetch('https://github.com/')
        .then((res) => {
            dispatch(loginSuccess(true, user));
        }).catch((e) => {
            dispatch(loginSuccess(false, null))
        })
    }
}

function isLogining() {
    return{
        type : types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess,user) {
    return{
        type : types.LOGIN_IN_DONE,
        isSuccess : isSuccess,
        user : user
    }
}