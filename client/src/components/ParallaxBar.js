import React, { Component } from "react";
import { Parallax } from 'react-parallax';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

class ParallaxBar extends Component {

    render() {
        return (

            <Parallax bgImage="https://i.imgur.com/aU2nkXT.jpg" strength={300}>
                <div style={{ height: 300 }}>
                    {/* <div style={insideStyles}>Dynamic Blur</div> */}
                    </div>
            </Parallax> 
             
        );
    }
};

export default ParallaxBar;
