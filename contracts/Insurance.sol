pragma solidity ^0.5.0;

contract Insurance{
    uint public total_usr = 0;
    uint public pay_money = 10 ether;
    uint public buy_money = 10 ether;
    address payable public user;
    address payable public insurer;
    enum State {Start, SetDetail, EndContract}

    struct Detail{      //contract detail
        State state;
        address user_addr;
        uint userid;
        uint startM;
        uint startD;
        uint endM;
        uint endD;
        bool if_accident;
        uint money;
    }

    struct Document{   //claim document
        bool A;
        bool B;
    }

    mapping(address => Detail) public detail;
    mapping(address => Document) public document;
    mapping(address => uint256) balanceOf;

    event e_Detail( 
        uint userID,
        address user_addr,
        uint startM,
        uint startD,
        uint endM,
        uint endD,
        bool accident
    );

    event e_Document(
        address user_addr,
        bool A,
        bool B,
        bool if_accident
    );

    event UID(
        uint uid
    );

    event done(
        string output
    );

    //modifier function
    modifier onlyinsurer(){
        require(
            msg.sender == insurer,
            "not insurer"
        );
        _;
    }

    modifier inState(State _state){
        require(
            detail[user].state == _state,
            "Invalid state"
        );
        _;
    }

    //start
    //get into constructor when contract be deployed - only one time
    constructor() public payable{
        insurer = msg.sender;
        balanceOf[insurer] = msg.value;
    }

    function SetDetail(uint _startM, uint _startD, uint _endM,  uint _endD, uint _userid) payable public returns (string memory){
        //init
        user = msg.sender;
        total_usr++;
        balanceOf[user]=user.balance;

        //set detail struct data
        detail[user].user_addr = user;
        detail[user].userid = _userid;
        detail[user].startM = _startM;
        detail[user].startD = _startD;
        detail[user].endM = _endM;
        detail[user].endD = _endD;
        detail[user].if_accident = false;
        detail[user].state = State.SetDetail;

        //init document
        document[user].A = false;
        document[user].B = false;

        //buy contract
        balanceOf[insurer] += msg.value;
        return ("set detail");
    }

    function getDocument(string memory _A, string memory  _B, uint _M, uint _D) public inState(State.SetDetail) returns (string memory){
        user = msg.sender;
        bool flag_doc = false;
        bool flag_date = false;

        if(keccak256(bytes(_A))==keccak256(bytes("emergency1")) && keccak256(bytes(_B))==keccak256(bytes("surgency2"))){
            document[user].A = true;
            document[user].B = true;
            flag_doc = true;
        }

        require( flag_doc , "wrong document.");

        if(detail[user].startM < _M && _M < detail[user].endM){
            flag_date = true;
        }else if(detail[user].startM == _M && detail[user].startD <= _D){
            flag_date = true;
        }else if(detail[user].endM == _M && _D <= detail[user].endD){
            flag_date = true;
        }

        require( flag_date , "wrong date.");
        transfer();
        detail[user].if_accident = true;

        emit e_Document(user, document[user].A, document[user].B, detail[user].if_accident);
        return ("in getDocument");
    }

    function transfer() public payable{
        //1. check insurer's balance, if pay_money < insurer.balance
        require(balanceOf[insurer] >= pay_money, "no money to pay.");

        //2. transfer to user
        user.transfer(pay_money);

        //reset balanceOf
        balanceOf[user] += user.balance;
        balanceOf[insurer] -= insurer.balance;

        emit done("finish transfer");
    }


    function getbalanceOf(address a) public view returns(uint256){
        return balanceOf[a];
    }

    function contract_balance() public view returns(uint256){
        return address(this).balance;
    }

    function getUserID() public{
        emit UID(detail[msg.sender].userid);
    }

    //insurer add more money
    function lessmoney() payable onlyinsurer public{
        balanceOf[insurer] += msg.value;
    }
}




