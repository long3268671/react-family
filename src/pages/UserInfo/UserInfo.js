import React,{ Component }  from 'react'
import { connect } from "react-redux";
import { getUserInfo } from '@/redux/actions/userInfo'
class UserInfo extends Component {
    render() {
        const { userInfo, isLoading, errorMsg } = this.props.userInfo
        return (
            <div>
                {
                    isLoading?'请求数据中！！！':
                        <div>
                            <p>用户信息：</p>
                            <p>用户名：{ userInfo.name }</p>
                            <p>介绍：{ userInfo.intro }</p>
                        </div>
                }
                <button onClick={()=>{ this.props.getUserInfo() }}>获取用户信息</button>
            </div>
        )

    }
}
const mapStateToProps = (state)=>{
    console.log('取值',state)
    return {
        userInfo:state.userInfo
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getUserInfo:()=>{
            dispatch(getUserInfo())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)