import React from 'react';
import { NavLink } from "react-router-dom"
import style from './my.module.scss'
class My extends React.Component{
    render(){
        return(
            <div id={style.top}>
                <div className={style.header}>
                    <div className={style.head}>
                        <span className={style.fanhui}>&lt;</span>
                        <p>我的聚美</p>
                        <NavLink><span className="iconfont">&#xe623;</span></NavLink>
                    </div>
                    <p className={style.title}><span className="iconfont">&#xe605;</span></p>
                    <div className={style.button}>
                        <NavLink>注册</NavLink>
                        <span></span>
                        <NavLink>登录</NavLink>
                    </div>
                </div>

                

                {/* 订单 */}

                <div className={style.dingdan}>
                        <div className={style.allDingdan}>
                            <i className="iconfont">&#xe501;</i>
                            <span className={style.myDingdan}>我的订单</span>
                            <NavLink>查看我的全部订单<span>&gt;</span></NavLink>
                        </div>
                        <div className={style.fukuan}>
                            <ul>
                               <li>
                                   <NavLink><i className="iconfont">&#xe704;</i><span>待付款</span></NavLink>
                               </li>
                               <li>
                                   <NavLink><i className="iconfont">&#xea44;</i><span>待收货</span></NavLink>
                               </li>
                               <li>
                                   <NavLink><i className="iconfont">&#xe604;</i><span>待评价</span> </NavLink>
                               </li>
                               <li>
                                   <NavLink><i className="iconfont">&#xe6a0;</i><span>退货/退款</span></NavLink>
                               </li>
                            </ul>
                        </div>
                </div>


                {/* =======我的资产=========== */}
                <div className={style.property}>
                    <div className={style.topProperty}>
                        <i className="iconfont">&#xe609;</i>
                        <span>我的资产</span>
                    </div>
                    <div className={style.botProperty}>
                        <NavLink>现金券</NavLink>
                        <NavLink>红包</NavLink>
                        <NavLink>聚美余额</NavLink>
                        <NavLink>礼品卡</NavLink>
                    </div>
                </div>




                {/* ================售后服务============== */}

                <div className={style.service}>
                    <NavLink><i className="iconfont">&#xe6d6;</i>售后服务<span>&gt;</span></NavLink>
                    <NavLink><i className="iconfont">&#xe620;</i>意见反馈<span>&gt;</span></NavLink>
                    <NavLink><i className="iconfont">&#xe614;</i>收货地址<span>&gt;</span></NavLink>
                    <NavLink><i className="iconfont">&#xe6de;</i>退出登录<span>&gt;</span></NavLink>
                    <NavLink><i className="iconfont">&#xe85d;</i>400-123-8888<span>&gt;</span></NavLink>
                </div>

                <div className={style.serviceFooter}>
                    <p>客服热线400-123-8888(8:00-22:00)</p>
                    <p>拨打前请记录您的UID0</p>
                </div>


            </div>
        )
    }
}
export default My