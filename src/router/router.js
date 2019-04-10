import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import App from '../App'
import Home from '../views/Home/home'
import Global from '../views/Global/global'
import Muandbaby from '../views/Muandbaby/muandbaby'
import Luxury from '../views/Luxury/luxury'
import Pop from '../views/Pop/pop'



import Together from '../views/Together/together'
import Shopcar from '../views/Shopcar/shopcar'
import My from '../views/My/my'

export const routes = (
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/global" component={Global}></Route>
                <Route path="/muandbaby" component={Muandbaby}></Route>
                <Route path="/luxury" component={Luxury}></Route>
                <Route path="/pop" component={Pop}></Route>


                <Route path="/together" component={Together}></Route>
                <Route path="/shopcar" component={Shopcar}></Route>
                <Route path="/my" component={My}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </App>
    </Router>
)