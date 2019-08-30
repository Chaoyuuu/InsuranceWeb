import React, { Component } from "react";
import { Parallax } from 'react-parallax';

class ParallaxBar extends Component {

    render() {
        return (

            <Parallax bgImage="https://i.imgur.com/5C4gO62.jpg" strength={450}>
                <div style={{ height: 300 }}>
                    {/* <div style={insideStyles}>Dynamic Blur</div> */}
                    </div>
            </Parallax> 
             
        );
    }
};

export default ParallaxBar;
