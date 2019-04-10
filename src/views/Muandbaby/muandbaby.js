import React from 'react';
import Headerbar from '../../components/Headerbar/headerbar';
import Navbar from '../../components/Navbar/navbar';
import style from './muandbaby.module.scss'
class Muandbaby extends React.Component{
    render(){
        return(
            <div>
                <Headerbar></Headerbar>
                <Navbar></Navbar>
            </div>
        )
    }
}
export default Muandbaby