import React from 'react';
import Headerbar from '../../components/Headerbar/headerbar';
import Navbar from '../../components/Navbar/navbar';
import style from './luxury.module.scss'
class Luxury extends React.Component{
    render(){
        return(
            <div>
                <Headerbar></Headerbar>
                <Navbar></Navbar>
            </div>
        )
    }
}
export default Luxury