import React from 'react'
import "./copyright.css"

const Copyright = () => {

    const currentYear = new Date().getFullYear();
    return ( <
        div className = "copyright" >
        <
        p > Copyright <i className = "fa-regular fa-copyright" > </i> {currentYear} All right reserved </p >
        </div>
    )
}

export default Copyright