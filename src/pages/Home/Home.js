import React,{ Component } from 'react'
export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    handClick(){
        this.setState({
            count:++this.state.count
        })
    }
    render() {
        return (
            <div>
                <p>当前数值为{ this.state.count }</p>
                <button onClick={this.handClick.bind(this)}>增加</button>
            </div>
        )
    }
}