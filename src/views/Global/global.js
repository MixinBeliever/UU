import React from 'react';

import Headerbar from '../../components/Headerbar/headerbar';
import Navbar from '../../components/Navbar/navbar';
import style from './global.module.scss'
class Global extends React.Component{
    render(){
        return(
            <div>
                <Headerbar></Headerbar>
                <Navbar></Navbar>
            </div>
        )
    }
}
export default Global