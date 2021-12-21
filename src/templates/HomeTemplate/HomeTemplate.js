import React, { Fragment, useEffect, useState } from 'react'
import { Route ,Switch} from 'react-router-dom'
import Header from '../Layout/Header/Header';
import HomeCarousel from '../Layout/HomeCarousel/HomeCarousel';




export const HomeTemplate = (props) => {
    const {Component , ...restProps} = props; // path, component, mobileComponent
    return <>
        <Route {...restProps} exact path={props.path} render={(propsRoute)=> {
            return <Fragment> 
                <Header {...propsRoute} />
                <HomeCarousel {...propsRoute} />
                <Component {...propsRoute}/>
            </Fragment>
        }} />
    </>
}

