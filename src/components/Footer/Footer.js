import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import "./Footer.css"

export class Footer extends Component {
    render() {
        return (
            <Fade bottom delay="100">
                <div className="footer_text">&lt;Copyright © 2022 Servandongti. All rights reserved. /&gt;</div>
            </Fade>
        )
    }
}

export default Footer
