/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
// import { AsyncStorage } from 'react-native';

import { Home } from "./components/home/Home"
import { Landing } from "./components/landing/Landing"
import { Winkels } from "./components/winkels/Winkels"
import {  Boodschappen } from "./components/boodschappen/Boodschappen"
import {  Profiel } from "./components/profiel/Profiel"
import {  WinkelMandje } from "./components/winkelmandje/WinkelMandje"
import {  Producten } from "./components/products/Producten"

import {  ShopInfo } from "./components/shopInfo/ShopInfo"
import {  Login } from "./components/login/Login"





class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
       this.getCookie = this.getCookie.bind(this);
    }

    // componentWillMount(){         
    //          axios.post('http://api.easy-shop.xyz/login_token.php', {username:'admin',password:'Azerty123'}).then((response) => {
    //            // console.log(response.data)
    //            axios.post('http://api.easy-shop.xyz/api.php', {token:response.data}).then((response) => {
    //                 // console.log(response)
    //             })
    //             .catch(function (error) {
    //             console.log(error);
    //             });
                
    

          
    //         })
    //           .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    render() {
        
        
  
        console.log(this.getCookie('loginFlag'));
        if (this.getCookie('loginFlag')) {
            return (
            
                <BrowserRouter>    
                    <switch>
                        <Route path="/welcome" component={Landing} />
                        <Route exact path="/" component={Home} />
                        <Route path="/winkels" component={Winkels} />
                        <Route path="/boodschappen" component={Boodschappen} />
                        <Route path="/profiel" component={Profiel} />
                        <Route path="/winkelmandje" component={WinkelMandje} />
                        
                        <Route path="/winkel/info/:shopId" component={ShopInfo} />
                        <Route path="/winkel/producten/:shopId" component={Producten} />

                       
                            
                       
                    </switch>
                </BrowserRouter>

            

            )
        } else {
            return (
            
                <BrowserRouter>    
                    <switch>
                        

                        <Route exact path="/" component={Login} />
                            
                       
                    </switch>
                </BrowserRouter>

            

            )
        }
       
    }
}

render(<App />, document.getElementById('appContainer'));