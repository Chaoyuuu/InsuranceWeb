import React, { Component } from "react";
import "./css/Home.css";
import NavBar from "./NavBar.js"
import HowToUse from "./HowToUse.js"
import { ParallaxProvider } from 'react-skrollr'
import { Parallax, Background } from 'react-parallax';

import { Tab, Tabs, Button, Container, Carousel } from "react-bootstrap";
import { Card, Row, Col, Media, Jumbotron, Image, Tooltip, OverlayTrigger, ButtonToolbar} from "react-bootstrap";


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
  const image1 =
  "https://i.imgur.com/aU2nkXT.jpg";
    
class Home extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        
    }

    

    render() {
        return (
            <ParallaxProvider
                init={{
                smoothScrollingDuration: 500,
                smoothScrolling: true,
                forceHeight: false
                }}
            >
            <div>               
                <NavBar/>
                
                {/* Intro */}
                <Carousel id="Intro">
                    <Carousel.Item >
                        <img
                        className="w-100"
                        src="https://i.imgur.com/5P4tuC0.jpg"
                        alt="First slide-blockchain"
                        // height={870}
                        />
                        <Carousel.Caption className="carousel-content">

                            <h3>Blockchain Application</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="w-100"
                        src="https://i.imgur.com/KqwmAg8.jpg"
                        alt="Second slide-computer"
                        // height={870}
                        />
                        <Carousel.Caption className="carousel-content">
                        <h3>Insurance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="w-100"
                        src="https://i.imgur.com/5MgPquE.jpg"
                        alt="Third slide-clock"
                        // width={1600}
                        // height={870}
                        />
                        <Carousel.Caption className="carousel-content">
                        <h3>快速交易</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                {/* <HowToUse/> */}

                
                {/* About */}
                <Jumbotron fluid id="about" >
                    <Container className="about-container">
                        
                    <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                        <Row> 
                            <Col className="col-md-offset-12 col-md-12 titlee">
                                <h2> What is Insurance Dapp </h2>
                                <div className="heading-line"></div>
                                <p> a website with blockchain </p>
                            </Col>
                        </Row>

                        <Media as="li" className="body">
                            <img
                                width={512}
                                height={350}
                                className="mr-4 img"
                                src="https://i.imgur.com/RD9oQQs.jpg"
                                alt="Generic placeholder"
                            />
                            <Media.Body >
                            <h5>List-based media object</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                    </Container>
                </Jumbotron>


                <Parallax bgImage="https://i.imgur.com/aU2nkXT.jpg" strength={300}>
                    <div style={{ height: 300 }}>
                        <div style={insideStyles}>Dynamic Blur</div>
                        </div>
                </Parallax>
                
                {/* <Parallax
                    // data={{
                    // 'data-center-center': 'opacity: 1;',
                    // 'data-bottom-top': 'opacity: 0;'
                    // }}
                    data={{
                        'data-top': 'background-color:rgb(0,0,255);  ',
                        'data-bottom-top': 'background-color:rgb(255,0,0);'
                        }}
                >
                    <div>hiii</div>
                </Parallax> */}
            
            {/* how to use */}
            <Container id="manual">
                <Row> 
                    <Col className="col-md-offset-12 col-md-12 tilte">
                        <h2> Before </h2>
                        <div className="heading-line"></div>
                    </Col>
                </Row>

                <Row className="row">
                    <Col xs={6}>
                        <Image className="manual-img"
                                src="https://i.imgur.com/VEHkUj9.png/" 
                                height={300} 
                                weight={300} 
                                rounded />
                    </Col >
                    <Col xs={6} className="col-w">
                        <h3>問題一</h3>
                        <p>有中間經理人<br/>
                            1. 投保人不會接觸保險公司與真實的合約<br/>
                            2. 有任何狀況都與經紀人溝通<br/>
                            3. 不對稱的資訊<br/>
                        </p>
                    </Col>
                </Row>

                <Row className="row">
                    <Col xs={6}>
                        <Image className="manual-img" 
                                src="https://i.imgur.com/VW7xBfw.png" 
                                height={300} 
                                weight={300} 
                                rounded />
                    </Col >
                    <Col xs={6} className="col-w">
                        <h3>問題二</h3>
                        <p>繁複的理賠程序<br/>
                            1. 投保人需自行準理賠相關文件<br/>
                            2. 等待保險公司漫長的理賠程序<br/>
                            3. 有心人士有機可乘<br/>
                        </p>
                    </Col>
                </Row>

                <Row> 
                    <Col className="col-md-offset-12 col-md-12 tilte">
                        <h2> After </h2>
                        <div className="heading-line"></div>
                    </Col>
                </Row>

                <Row className="row justify-content-md-center">    
                    <Image className="manual-img"
                            src="https://i.imgur.com/MoraZPo.png" 
                            height={400} 
                            weight={400} 
                            rounded />
                </Row>

                <Row className="row justify-content-md-center" >
                    <p>搭建區塊鏈與智能合約<br/>
                        1. 由智能合約計算理賠結果<br/>
                        2. 區塊鏈保存交易紀錄<br/>
                        3. 縮短流程、節省時間<br/>
                        4. 過程透明
                    </p>
                </Row>
            </Container>


            <Parallax bgImage="https://i.imgur.com/aU2nkXT.jpg" strength={300}>
                <div style={{ height: 300 }}>
                <div style={insideStyles}>Dynamic Blur</div>
                </div>
            </Parallax>
            

                {/* tool */}
                <Container id="tool" background-color="beige">
                    <Row> 
                        <Col className="col-md-offset-12 col-md-12 tilte">
                            <h2> Tools </h2>
                            <div className="heading-line"></div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_1">
                            <a href="https://www.trufflesuite.com/ganache">
                            <Image
                                width={230}
                                height={230} 
                                src="https://i.imgur.com/sr1NsjK.png" roundedCircle/>
                            </a>
                            <h3>Ganache</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_2">
                            <a href="https://www.ethereum.org/">
                            <Image 
                                width={250}
                                height={230} 
                                src="https://i.imgur.com/IozD8Fx.png" roundedCircle />
                            </a>
                            <h3>Ethereum</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_3">
                            <a href="https://reactjs.org/">
                            <Image 
                                width={230}
                                height={230} 
                                src="https://i.imgur.com/lHbSR6v.png" roundedCircle/>
                            </a>
                            <h3>React</h3>
                            <p>the text </p>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_4">
                            <a href="https://metamask.io/">
                            <Image 
                                width={250}
                                height={230} 
                                src="https://i.imgur.com/l1xsDOH.jpg" roundedCircle/>
                            </a>
                            <h3>Metamask</h3>
                            <p>the text </p>
                        </Col>
                    </Row>
                </Container>


               

                {/* about_me */}
                <Jumbotron fluid id="about_me">
                    <Container className="about-container">
                        <Row> 
                            <Col className="col-md-offset-12 col-md-12 titlee">
                                <h2> What is Insurance Dapp </h2>
                                <div className="heading-line"></div>
                                <p> a website with blockchain </p>
                            </Col>
                        </Row>

                        <Media as="li">
                            <img
                            width={512}
                            height={300}
                            className="mr-4 img"
                            src="https://i.imgur.com/yFd5QDg.jpg"
                            alt="Generic placeholder"
                            />
                            <Media.Body className="body">
                            <h5>List-based media object</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid id="end">
                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                            C.Y LEE in <strong>facebook</strong>.
                            </Tooltip>
                        }>
                        <Image 
                            width={40}
                            height={40}
                            className="mr-4 img"
                            src="https://i.imgur.com/BdWdkzx.png"
                            alt="facebook"/>
                    </OverlayTrigger>

                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                            Insurance Dapp in <strong>github</strong>.
                            </Tooltip>
                        }>
                        <Image
                            width={40}
                            height={40}
                            className="mr-4 img"
                            src="https://i.imgur.com/vOVE10Z.png"
                            alt="github"/>
                    </OverlayTrigger>


                    <OverlayTrigger
                        overlay={
                            <Tooltip className="tooltips">
                            connect with auther, 
                            gmail: <strong>a0935292660@gmail.com</strong>
                            </Tooltip>   
                        }>

                        <Image 
                            width={40}
                            height={40}
                            className="mr-4 img"
                            src="https://i.imgur.com/P12PjVr.png"
                            alt="email"/>
                    </OverlayTrigger>

                    <h2>All rights reserved by C.Y.LEE NCKU</h2>  
                </Jumbotron>
           

    </div>
    </ParallaxProvider>     
        );
    }
};
// const Home = () =>{
//     return (
//         <div>
//             Home
//         </div>
//     );
// };

export default Home;