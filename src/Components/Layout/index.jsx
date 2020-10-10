import React, { Component } from 'react'
import { BrowserRouter, Link,Route } from "react-router-dom";
import LkHeader from "./../Header/LkHeader";
import LKAside from './../Aside/LKAside';
import routes from "./../../Router/index"
 class Layout extends Component {
    render() {
        return (
            <div >
            <LkHeader></LkHeader>
            <div className="main">
            <LKAside/>
            {this.props.children}
           
            {/* {
              routes.map(( route,index ) => {
                if(route.exact){
                  return <Route  
                          key={index}
                          exact 
                          path={route.path}
                          render={props=>(
                            <route.component {...props}/>
                          )}
                          />
                }else{
                  return <Route
                          key={index}
                          path={route.path}
                          render={props=>(
                            <route.component {...props}/>
                          )}
                          />
                }
            })
            } */}
            </div>
          </div>
        )
    }
}

export default Layout;
