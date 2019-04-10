import React from 'react';
import { NavLink, } from 'react-router-dom'


import style from './navbar.module.scss'
class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><NavLink to="/home" activeClassName={style.active}>首页</NavLink></li>
                    <li><NavLink to="/global" activeClassName={style.active}>极速免税店</NavLink></li>
                    <li><NavLink to="/muandbaby" activeClassName={style.active}>母婴</NavLink></li>
                    <li><NavLink to="/luxury" activeClassName={style.active}>轻奢</NavLink></li>
                    <li><NavLink to="/pop" activeClassName={style.active}>极品特卖</NavLink></li>
                </ul>
            </nav>
        )
    }
}
export default Navbar