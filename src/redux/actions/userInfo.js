export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
export function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());
        setTimeout(()=>{
            let obj = {
                name:'张三',
                intro:'这个是张三的介绍'
            }
            dispatch(getUserInfoSuccess(obj))
        },1000)
        // return fetch('http://localhost:8080/api/app.json')
        //     .then((response => {
        //         return response.json()
        //     }))
        //     .then((json) => {
        //             let obj = {
        //                 name:'张三',
        //                 intro:'这个是张三的介绍'
        //             }
        //             dispatch(getUserInfoSuccess(obj))
        //         }
        //     ).catch(
        //         () => {
        //             dispatch(getUserInfoFail());
        //         }
        //     )
    }
}