import React from "react"
import Header from '../Component/HeaderPublic'
import Footer from '../Component/Footer'
import './LayoutPublic.css'

function LayoutPublic({ children }){
    return(
        <div className="layoutPublic">
		<>
			<Header />
			<div className="layout-container">{children}</div>
			<Footer />
		</>
        </div>
    )
}

export default LayoutPublic