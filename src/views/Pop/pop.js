import React from 'react';
import Headerbar from '../../components/Headerbar/headerbar';
import Navbar from '../../components/Navbar/navbar';
import style from './pop.module.scss'
class Pop extends React.Component{
    render(){
        return(
            <div>
                <Headerbar></Headerbar>
                <Navbar></Navbar>
            </div>
        )
    }
}
export default Pop