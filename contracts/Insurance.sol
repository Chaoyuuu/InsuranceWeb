pragma solidity ^0.5.0;

contract Insurance{
    uint public total_usr = 0;
    uint public user_ID;
    uint public money = 1000;
    address payable public user;
    address payable public receiver;
    bytes32 Document_A = 'docA';
    bytes32 Document_B = "docB";
    bytes32 Document_C = "docC";
    enum State {SetInfo, SetDetail, GetAccident, GetDocument, Finish} 
    State public state;
    
    struct UserInfo{
        State state;
        address addr;
        
        string Name;
        uint birth;
        uint ID;
    }
    
    struct Detail{
        uint startTime;
        uint endTime;
        bool accident;
    }
    
    struct Document{
        uint count;
        bool A;
        bool B;
        bool C;
    }
    
    mapping(uint => Detail) public detail;
    mapping(uint => UserInfo) public userInfo;
    mapping(uint => Document) public document;
    
    mapping(address => uint256) balanceOf;
    
    event e_UserInfo(
        uint userID,
        string Name,
        uint birth,
        uint ID
    );

    event e_Detail( //contract detail
        uint userID,
        uint startTime,
        uint endTime,
        bool accident
    );

    event e_Document(
        uint userID,
        uint count,
        bool A,
        bool B,
        bool C
    );

    constructor() public{   
        // user = msg.sender;
        //receiver = receiver.address
        //balanceOf[receiver] = 1000;
        setUserInfo("test", 6506, 26, 5, 10);
    }
    
    modifier check_date(uint time){   //??????????????????????
        require(
            time <= detail[user_ID].endTime && time >= detail[user_ID].startTime, 
            "not in the right time"
        );
        _;
    }
    
    modifier check_user(){
        require(
            msg.sender == userInfo[user_ID].addr,
            "Wrong user"
        );
        _;
    }
    
    modifier inState(State _state){
        require(
            userInfo[user_ID].state == _state,
            "Invalid state"
        );
        _;
    }

    function setUserInfo(string memory _Name, uint _ID, uint _birth, uint _startTime, uint _endTime) public {
        total_usr++;
        user_ID = _ID; 
        
        userInfo[user_ID].addr = msg.sender;
        userInfo[user_ID].ID = _ID;
        userInfo[user_ID].Name = _Name;
        userInfo[user_ID].birth = _birth; 

        balanceOf[userInfo[user_ID].addr] = 99;
        
        emit e_UserInfo(user_ID, userInfo[user_ID].Name, userInfo[user_ID].birth, userInfo[user_ID].ID);

        detail[user_ID].startTime = _startTime;
        detail[user_ID].endTime = _endTime;
        detail[user_ID].accident = false;
        
        document[user_ID].A = false;
        document[user_ID].B = false;
        document[user_ID].C = false;

        emit e_Detail(user_ID, detail[user_ID].startTime, detail[user_ID].endTime, detail[user_ID].accident);
    }
    
    //be sure the user already do setUserInfo
    /*
    function setContract(uint _ID, uint _startTime, uint _endTime, uint _money) public check_user {
        user_ID = _ID; 
        detail[user_ID].startTime = _startTime;
        detail[user_ID].endTime = _endTime;
        detail[user_ID].money = _money;
        detail[user_ID].accident = false;
        
        document[user_ID].A = false;
        document[user_ID].B = false;
        document[user_ID].C = false;

        emit e_Detail(user_ID, detail[user_ID].startTime, detail[user_ID].endTime, detail[user_ID].money, detail[user_ID].accident);
    }
    */

    function getAccident(uint _ID) public returns(string memory){
        user_ID = _ID;
        detail[user_ID].accident = true;
        return("please give me some document");
    }

    function getDocument(uint _ID) public{
        user_ID = _ID;
        document[user_ID].A = true;
        document[user_ID].B = true;
        document[user_ID].C = true;

        transfer();
        emit e_Document(user_ID, document[user_ID].count, document[user_ID].A, document[user_ID].B, document[user_ID].C);

    }
    
    /*
    function getDocument(uint _ID, string memory _document) public returns(string memory){  //how to upload file???? make to do list????
        user_ID = _ID;
        if(_document == Document_A){
            if(document[user_ID].A == false){
                document[user_ID].A = true;
                document[user_ID].count++;
            }else{
                return("already get docA");
            }
            
        }else if(_document == Document_B){
            if(document[user_ID].B == false){
                document[user_ID].B = true;
                document[user_ID].count++;
            }else{
                return("already get docB");
            }
            
        }else if(_document == Document_C){
            if(document[user_ID].C == false){
                document[user_ID].C = true;
                document[user_ID].count++;
            }else{
                return("already get docC");
            }
        }else{
            return("wrong input doc");
        }
        
        if(document[user_ID].count == 3){ //transfer money
            transfer();
            return("transfer money");
        }
        return("get doc"); //not going

        emit e_Document(user_ID, document[user_ID].count, document[user_ID].A, document[user_ID].B, document[user_ID].C);
    }
    */

        
    function() external payable{} 
    
    function transfer() public {
        // user.transfer(address(this).balance);
        balanceOf[userInfo[user_ID].addr] += 10; 
    }
    
    // function Balance() public view returns(uint){
    //     return address(this).balance;
    // }
    
    function getbalanceOf(address a) public view returns(uint256){
        return balanceOf[a];
    }
}