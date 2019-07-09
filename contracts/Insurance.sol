pragma solidity ^0.5.0;

contract Insurance{
    uint public total_usr = 0;
    uint public pay_money = 5 ether;    
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
    }
    
    struct Document{   //claim document
        bool A;
        bool B;
        bool C;
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
        bool C,
        int num
    );
  
    //modifier function
    modifier check_claim(uint S){
        require(
            S == 1,
            "fail in claim"
        );
        _;
    }
    
    modifier check_user(){
        require(
            msg.sender == detail[user].user_addr,
            "Wrong user"
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
        // setUserInfo("test", 0000, 00, 0, 0);
    }
    
    function SetDetail(uint _startM, uint _startD, uint _endM,  uint _endD, uint _userid) public returns (string memory){
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
        
        emit e_Detail(detail[user].userid, detail[user].user_addr, detail[user].startM, detail[user].startD, detail[user].endM, detail[user].endD, detail[user].if_accident);
        
        //init document
        document[user].A = false;
        document[user].B = false;
        document[user].C = false;

        emit e_Document(user, document[user].A, document[user].B, document[user].C, 0);

        return ("set detail");
    }

    function getDocument(string memory _A, string memory  _B, uint _M, uint _D) public inState(State.SetDetail) returns (string memory){
        user = msg.sender;
        
        if(keccak256(bytes(_A))==keccak256(bytes("bed")) && keccak256(bytes(_B))==keccak256(bytes("hostipal"))){
            document[user].A = true;
            document[user].B = true;
            document[user].C = true;
        }else{
            is_error();
        }
        
        if(detail[user].startM >= _M){
            is_error();
        }else if(detail[user].startM == _M && detail[user].startD >= _D){
            is_error();
        }else if(detail[user].endM < _M){
            is_error();
        }else if(detail[user].endM == _M && detail[user].endD <= _D){
            is_error();
        }else{
            detail[user].if_accident = true;
            // detail[user].state = State.EndContract;
            transfer();
        }
        
        emit e_Document(user, document[user].A, document[user].B, document[user].C, 23);
        
        return ("in getDocument");
    }
    
    // function() external payable{} ///????????????????????????
    
    function transfer() public payable{
        //1. check insurer's balance, if pay_money < insurer.balance
        //2. transfer to user
        user.transfer(pay_money);
        
        //reset balanceOf
        balanceOf[user] += user.balance;
        balanceOf[insurer] -= insurer.balance;
    }
    
    function getbalanceOf(address a) public view returns(uint256){
        return balanceOf[a];
    }
    
    function getUserID() public returns(uint){
        user = msg.sender;
        return detail[user].userid;
    }
    
    function is_error() public pure check_claim(0){}
}