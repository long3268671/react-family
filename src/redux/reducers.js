import { combineReducers } from 'redux'
import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
// export default function combineReducers(state = {}, action) {
//     console.log('查看state',state)
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }
export default combineReducers({
    counter,
    userInfo
})