import React from 'react'

import Navbar from './Navbar'
import Footer from "./Footer"

//why do we need normalize.css is because, every browser( chrome, firefox, safar, opera ) has an inbuilt css style defined
// for each html tag. which will be applied when no style defined by user. Due to this inconsistency in css styles( like margin, font-size etc), the webpage looks different on different browsers
// in order to remove this inconsistency, we have two options 1.) CSS reset: writing reset style of using elements, 2.) using community contributed css file called normalize.css
// using normalize.css makes the code more standardized and consistant

import "normalize.css"
import "../assets/css/main.css"

const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout
