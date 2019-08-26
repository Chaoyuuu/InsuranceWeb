import React, { Component } from "react";
import NavBar from "./NavBar.js"
import { Container, Button} from "react-bootstrap";
import { Collapse, Steps, Col, Icon} from 'antd';
import "./css/Contracts.css";

const { Step } = Steps;
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

class MyContract extends Component{

    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    render(){
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <Container >
                    <Col span={6}>
                        <Steps direction="vertical" current={0} className="steps">
                            <Step title={<strong>選擇方案</strong>} description="選擇適合的方案" />
                            <Step title="填寫基本資料" description="請填寫相關內容" />
                            <Step title="購買完成" description="感謝支持" />
                        </Steps>
                    </Col>
                    <Col span={18}>
                        <h2>健康醫療保險方案說明如下 : </h2>
                        <Collapse justify-content-md-center defaultActiveKey={['1']} onChange={callback} accordion>
                            <Panel header="方案1" key="1">
                            <h3>承保年齡</h3>
                                <p>0歲至繳費期滿不超過70歲</p>

                                <h3>商品特色</h3>
                                <p>- 依據健保定義之重大傷病為理賠依據，簡單明確<br/>
                                - 步數達標，保障提升，讓您的每一步更有價值<br/>
                                - 建構家庭保障網，一次為多人投保享有保費折減</p>

                                <h3>給付項目</h3>
                                <p>身故/完全失能 特定傷病 祝壽金</p>
                                <Button className="btn" href="\App" variant="outline-danger">選擇</Button>
                            </Panel>
                            <Panel header="方案2" key="2">
                                <h3>承保年齡</h3>
                                <p>0歲至70歲</p>

                                <h3>商品特色</h3>
                                <p>- 住院給付：含住院醫療、加護病房等2項保險金<br/>
                                - 手術給付：含住院手術、門診手術及101項特定處置保險金等4項保險金<br/>
                                - 更約保證：保險年齡80歲之保險期間屆滿後可保證更約至本公司公告同類型主約</p>

                                <h3>給付項目</h3>
                                <p>住院給付 手術給付 其他給付</p>
                                <Button className="btn" href="\App" variant="outline-danger">選擇</Button>
                            </Panel>
                            <Panel header="方案3" key="3">
                                <h3>承保年齡</h3>
                                <p>15歲~45歲</p>

                                <h3>商品特色</h3>
                                <p>- 保費便宜，住院、手術保障一次擁有<br/>
                                - 無理賠紀錄，回饋年繳應繳保險費總額之10%<br/>
                                - 更約保證，期滿可保證更約至本公司公告同類型主約</p>

                                <h3>給付項目</h3>
                                <p>住院給付 手術給付 其他給付</p>
                                <Button className="btn" href="\App" variant="outline-danger">選擇</Button>
                            </Panel>
                        </Collapse>
                    </Col>
                </Container>
            </div>
        );
    }
};

export default MyContract;