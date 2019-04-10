import React from 'react';

import style from './home.module.scss'
import Headerbar from '../../components/Headerbar/headerbar';
import Navbar from '../../components/Navbar/navbar';
class Home extends React.Component{
    render(){
        return(
            <div>
                <Headerbar></Headerbar>
                <Navbar></Navbar>
            </div>
        )
    }
}
export default Home