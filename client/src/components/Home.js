import React, { Component } from "react";
import "./css/Home.css";
import NavBar from "./NavBar.js"
import ParallaxBar from "./ParallaxBar.js"
import { ParallaxProvider, Parallax } from 'react-skrollr'

import useTypewriter from "react-typewriter-hook"
import { useState, useEffect, useRef } from "react";
import { Container, Carousel } from "react-bootstrap";
import { Row, Col, Media, Jumbotron, Image, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Button, Icon } from 'antd';


const MagicOcean = [
    "Insurance Dapp ?",
    "BlockChain ?",
    "Decentralized Application ?"
];

let index = 0;
function Typistloop() {
    const [magicName, setMagicName] = useState("this ?");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                // index = index + 1 > 2 ? 0 : ++index + 1;
                index = index > 2 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 6000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    return (
        <div className="App">
            <h2 className="cursor">What is {name}</h2>
            <p>區塊鏈網頁保險服務系統</p>
        </div>
    );
  }

    
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
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
                {/* <Carousel id="Intro">
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
                </Carousel> */}


                {/* header */}
                <Jumbotron id="header" >
                    <Typistloop/>            
                    <Button className="btn" shape="round" ghost><a href="#Before">Get Start</a></Button>   
                </Jumbotron>

                
                {/* About */}
                <Jumbotron fluid id="about" >
                    <Container className="about-container">
                        <Row> 
                            <Col className="col-md-offset-12 col-md-12 titlee">
                                <h2> What is Insurance Dapp </h2>
                                <div className="heading-line"></div>
                                <p> BlockChain x Insurance Application</p>
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
                            {/* <h5>Introduction</h5> */}
                            <p>
                                本專題以區塊鏈與智能合約為基礎架構，開發去中心化應用程式，
                            改善傳統保險理賠的流程，增加理賠的效率與安全。
                            並將所有交易紀錄與相關訊息保存於區塊鏈上，以其高可靠信度、去中心化的優點，
                            使交易過程與相關資訊透 明化，也讓使用者能更安心的使用。
                            </p>
                            </Media.Body>
                        </Media>
                    </Container>
                </Jumbotron>


                <ParallaxBar/>
                
                {/* <Parallax
                    data={{
                    'data-center-center': 'opacity: 1; transform:translateX(500px)',
                    'data-bottom-top': 'opacity: 0; transform:translateX(-200px)',
                    // 'data-top': 'color:rgb(0,0,255);  ',
                    // 'data-_foobar':"left:0%;"
                    'transform': 'translateX(-100px)', 'margin': '10px auto'
                    // 'data-top': 'opacity: 0;'
                    }}
                    // data={{
                    //     'data-top': 'background-color:rgb(0,0,255);  ',
                    //     'data-bottom-top': 'background-color:rgb(255,0,0);'
                    //     }}
                >
                    <div>hiii</div>
                </Parallax> */}
            
            {/* how to use */}
            <Container id="Before">
                <Row> 
                    <Col className="col-md-offset-12 col-md-12 tilte">
                        <h2> Issue </h2>
                        <div className="heading-line"></div>
                    </Col>
                </Row>

                <Row className="row">
                    <Col xs={6}>
                        <Parallax
                            data={{
                            'data--100-bottom': 'opacity: 1; transform:translateX(0px); margin: 10px auto;',
                            'data-bottom-top': 'opacity: 0; transform:translateX(-200px)',                        
                            }}>
                            <Image className="manual-img"
                                        src="https://i.imgur.com/VEHkUj9.png/" 
                                        height={300} 
                                        weight={300} 
                                        rounded />
                            <Image className="manual-img img-2" 
                                    src="https://i.imgur.com/VW7xBfw.png" 
                                    height={300} 
                                    weight={300} 
                                    rounded />
                    </Parallax>
                    </Col >
                    <Col xs={6} className="col-w">
                        <Parallax
                                data={{
                                'data-center-center': 'opacity: 1;',
                                'data-bottom-top': 'opacity: 0;',                        
                                }}>
                       
                            <h3>問題一</h3>
                            <p><u>中間經理人</u><br/>
                                1. 投保人不會接觸保險公司與真實的合約<br/>
                                2. 有任何狀況都與經紀人溝通<br/>
                                3. 不對稱的資訊<br/>
                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h3>問題二</h3>
                            <p><u>繁複的理賠程序</u><br/>
                                1. 投保人需自行準理賠相關文件<br/>
                                2. 等待保險公司漫長的理賠程序<br/>
                                3. 有心人士有機可乘<br/>
                            </p>
                        </Parallax>
                    </Col>
                </Row>
            </Container>

            <Jumbotron fluid id="After">
            <Container >
                <Row> 
                    <Col className="col-md-offset-12 col-md-12 tilte">
                        <h2> Solution </h2>
                        <div className="heading-line"></div>
                    </Col>
                </Row>

                <Row className="row-0 justify-content-md-center">    
                <Parallax
                    data={{
                    'data-center-center': 'opacity: 1; transform:rotate(0deg); ',
                    'data-bottom-top': 'opacity: 0; transform:rotate(180deg); ',                        
                    }}>
                    <Image 
                        src="https://i.imgur.com/9vXK5rz.png" 
                        height={350} 
                        weight={350} 
                        rounded />
                </Parallax>
                </Row>

                <Row className="row justify-content-md-center">
                   <Col md={{ span: 2, offset: 0 }}>
                        <Parallax
                        data={{
                        'data--100-bottom': 'opacity: 1; transform:rotate(0deg);',
                        'data-bottom': 'opacity: 0; transform:rotate(90deg);',                        
                        }}>
                            <Image
                                className="img-1"
                                src="https://i.imgur.com/3chzft8.png"
                                height={160} 
                                weight={160} 
                                roundedCircle />
                        </Parallax>
                    </Col>
                    <Col md={2}>
                        <Parallax
                        data={{
                        'data--100-bottom': 'opacity: 1; transform:rotate(0deg); ',
                        'data-bottom': 'opacity: 0; transform:rotate(90deg);',                        
                        }}>
                            <Image
                                className="img-2"
                                src="https://i.imgur.com/Ia24HDD.png" 
                                height={160} 
                                weight={160} 
                                roundedCircle />
                        </Parallax>
                    </Col>
                    <Col md={2}>
                        <Parallax
                        data={{
                        'data--100-bottom': 'opacity: 1; transform:rotate(0deg);',
                        'data-bottom': 'opacity: 0; transform:rotate(90deg); ',                        
                        }}>
                            <Image
                                className="img-3"
                                src="https://i.imgur.com/UJLeI89.png" 
                                height={160} 
                                weight={160} 
                                roundedCircle />
                        </Parallax>
                        
                    </Col>
                   
                </Row>
                <h3>搭建區塊鏈與智能合約</h3>
                <Row className="row justify-content-md-center" >
                    <div>
                    
                    <p>
                        1. 保險公司與相關單位主動提供資料證明意外發生<br/>
                        2. 智能合約計算理賠結果，馬上獲得支付<br/>
                        3. 區塊鏈保存交易紀錄，資訊透明化<br/>
                        4. 縮短流程、節省時間、操作簡單<br/>
                    </p>
                    </div>
                </Row>
            </Container>
            </Jumbotron>

            <Carousel id="How">
                    <Carousel.Item >
                        <img
                        className="h-bg"
                        src="https://i.imgur.com/TqZKl4E.png"
                        alt="First slide-blockchain"
                        // height={870}
                        />
                        <Carousel.Caption className="carousel-content">
                            <Row>
                                <Col lg={6}>
                                    <img
                                        className="h-2"
                                        src="https://i.imgur.com/gY0OJql.png"
                                        alt="Second slide-computer"
                                        height={300}
                                        width={400}
                                        />
                                </Col>
                                <Col lg={6}>
                                    <h3>理賠程序</h3>
                                    <p>過去客戶必須自行提供保險理賠申請的相關文件，證明意外事件的發生。
                                        現在由保險公司與醫院機關主動提供相關資料，而客戶只需要提出理賠請求，
                                        由智能合約立即分析索賠，並且自動獲得支付。
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="h-bg"
                        src="https://i.imgur.com/TqZKl4E.png"
                        alt="Second slide-computer"
                        // height={870}
                        />
                        <Carousel.Caption className="carousel-content">
                            <Row>
                                <Col lg={6}>
                                    <img
                                        className="h-2"
                                        src="https://i.imgur.com/flah7Yu.png"
                                        alt="Second slide-computer"
                                        height={300}
                                        width={400}
                                        />
                                        
                                </Col>
                                <Col lg={6}>
                                    <h3>簽訂合約</h3>
                                    <p>使用者以虛擬帳戶跟合約互動，
                                        輸入基本資料並支付小額手續費後，
                                        用戶資料與交易紀錄將被記錄在區塊鏈上。
                                        並由系統回傳交易紀錄與區塊鏈的位址，方便日後使用者查詢。
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


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
                            
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_2">
                            <a href="https://www.ethereum.org/">
                            <Image 
                                width={250}
                                height={230} 
                                src="https://i.imgur.com/IozD8Fx.png" roundedCircle />
                            </a>
                            <h3>Ethereum</h3>
                           
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_3">
                            <a href="https://reactjs.org/">
                            <Image 
                                width={230}
                                height={230} 
                                src="https://i.imgur.com/lHbSR6v.png" roundedCircle/>
                            </a>
                            <h3>React</h3>
                           
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} className="card_4">
                            <a href="https://metamask.io/">
                            <Image 
                                width={250}
                                height={230} 
                                src="https://i.imgur.com/l1xsDOH.jpg" roundedCircle/>
                            </a>
                            <h3>Metamask</h3>
                            
                        </Col>
                    </Row>
                </Container>

                {/* <ParallaxBar/> */}

                {/* about_me */}
                {/* <Jumbotron fluid id="about_me">
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
                </Jumbotron> */}

                <Jumbotron fluid id="end">
                    <Row className="r-1">
                        <Col span={12} offset={6}>
                            <Button type="link" href="https://github.com/Chaoyuuu/InsuranceWeb" ghost><Icon style={{ fontSize: '30px' }} type="github" /></Button>
                            <Button  type="link" href="https://www.facebook.com/chaoyu.lee.1" ghost> <Icon style={{ fontSize: '30px' }} type="facebook" /></Button>
                            <Button  type="link" ghost><Icon style={{ fontSize: '30px' }} type="star" theme="filled" /></Button>
                        </Col>
                    </Row>
                     {/*<OverlayTrigger
                        overlay={
                            <Tooltip>
                            <Rate allowHalf defaultValue={2.5} />
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
                    </OverlayTrigger> */}
                    <Row>
                    <Col>
                    <h2>All rights reserved by C.Y.LEE NCKU</h2>  
                    
                    
                    <div>
                        Icons made by monkik
                        from www.flaticon.com
                        is licensed by CC 3.0 BY
                        </div>
                        </Col>
                        </Row>
                </Jumbotron>
                
    </div>
    </ParallaxProvider>     
        );
    }
};

export default Home;