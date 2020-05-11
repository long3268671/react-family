import React,{ Component } from 'react'
import './page1.scss'
import img1 from './1.jpg'
export default class Home extends Component{
    render() {
        return (
            <div className='page-box'>
                <p>
                    这是page1页面1111
                    <img src={img1}/>
                </p>

            </div>
        )
    }
}