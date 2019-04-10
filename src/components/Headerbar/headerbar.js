import React from 'react';

import style from './headerbar.module.scss'
class Headerbar extends React.Component{
    render(){
        return(
            <header>
                <a>
                    <div>
                        <img src="/img/search_btn.png" alt="" />
                        <span className={style.index_search_title}>搜索商品 分类 功效</span>
                    </div>
                    <span className={style.search_list}>
                        <img src="/img/search_list2.png" alt=""/>
                    </span>
                </a>
            </header>
        )
    }
}
export default Headerbar