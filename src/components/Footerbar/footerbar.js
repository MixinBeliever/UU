import React from 'react';
import { NavLink, } from 'react-router-dom'

import style from './footerbar.module.scss'
class Footerbar extends React.Component{
    render(){
        return(
            <footer>
                <ul>
                    <li><NavLink to="/home" activeClassName={style.active}><span class="iconfont icon-shouye"></span>首页</NavLink></li>
                    <li><NavLink to="/together" activeClassName={style.active}><span class="iconfont  icon-pintuan"></span>拼团</NavLink></li>
                    <li><NavLink to="/shopcar" activeClassName={style.active}><span class="iconfont icon-baobao"></span>购物车</NavLink></li>
                    <li><NavLink to="/my" activeClassName={style.active}><span class="iconfont icon-wode"></span>我的</NavLink></li>
                </ul>
            </footer>
        )
    }
}
export default Footerbar