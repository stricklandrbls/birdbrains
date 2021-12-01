pragma solidity ^0.8.0;


// █▀▄ █▀▀ █░█ █▀▀ █░░ █▀█ █▀█ █▀▀ █▀▄   █▄▄ █▄█
// █▄▀ ██▄ ▀▄▀ ██▄ █▄▄ █▄█ █▀▀ ██▄ █▄▀   █▄█ ░█░
// 
// ░██████╗███╗░░░███╗░█████╗░██████╗░████████╗░█████╗░██╗░░██╗░█████╗░██╗███╗░░██╗
// ██╔════╝████╗░████║██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║░░██║██╔══██╗██║████╗░██║
// ╚█████╗░██╔████╔██║███████║██████╔╝░░░██║░░░██║░░╚═╝███████║███████║██║██╔██╗██║
// ░╚═══██╗██║╚██╔╝██║██╔══██║██╔══██╗░░░██║░░░██║░░██╗██╔══██║██╔══██║██║██║╚████║
// ██████╔╝██║░╚═╝░██║██║░░██║██║░░██║░░░██║░░░╚█████╔╝██║░░██║██║░░██║██║██║░╚███║
// ╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝
//
//      smartchain.community

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PetPack is ERC721Enumerable, Ownable {
    using Strings for uint256;
   

    string      public baseURI;
    string      public baseExtension = ".json";
    uint256     public cost = 1 ether;
    uint256     public maxSupply = 10000;
    uint256     public maxPreSale = 200;
    uint256     public maxMintAmount = 20;
    uint256     public whitelistCount = 0;
    bool        public paused = true;
    bool        public presale = true;
    bool        public revealed = false;

    mapping(address => bool)    public  whitelisted;
    mapping(string  => address) private developers;
   
    constructor( string memory _name, string memory _symbol, string memory _initBaseURI ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
        developers["SBCLLC"]    = address(0xdddab3c6F82219b59Ed0e774EC3C308acBc08C13);
        developers["SAM"]       = address(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);
        developers["ALLISON"]   = address(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);

        _safeMint(address(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4), 1);
        _safeMint(address(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2), 2);
        _safeMint(address(0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db), 3);
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) { // Overloaded ERC721::_baseURI()
        return baseURI;
    }
    // public
    function mint(uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply, "Collection mintage has run out!");
        require(balanceOf(msg.sender) <= maxMintAmount, "Receiving address reached the maximum mintage. Wait until the next collection!");

        if(presale){
            // Only let whitelisted users buy at lower price
            require(whitelisted[msg.sender], "You must be whitelisted to mint at this time");    
            require(supply + _mintAmount < maxPreSale, "The maximum amount of presales have been reached");

            for (uint256 i = 1; i <= _mintAmount; i++) {
                _safeMint(msg.sender, supply + i); // Uses second paramters to index the baseURI
            }
        }
        else{
            // Free for all

            if(msg.sender != owner()){
                require(msg.value >= cost * _mintAmount, "Insufficient funds :'( ");
            }

            for (uint256 i = 1; i <= _mintAmount; i++) {
                _safeMint(msg.sender, supply + i); // Uses second paramters to index the baseURI
            }

        }

    }

    function tokensIDsInWalletOf(address _owner) public view returns (uint256[] memory)
    {
        uint256     ownerTokenCount = balanceOf(_owner);
       
        uint256[]   memory      tokenIds = new uint256[](ownerTokenCount);
       
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory)
    {
        require( _exists(tokenId), "ERC721Metadata: URI query for nonexistent token" );

        string memory currentBaseURI = _baseURI();
        if(revealed){
            return bytes(currentBaseURI).length > 0? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension)) : "";
        }
        else{
            return string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension));
        }
    }
    // public views
    function calculateCost(uint amount) public view returns (uint) { return cost * amount; }
   
    // only devs
    function withdraw() public payable onlyOwner {
        uint _40 = address(this).balance * 40 / 100;
        uint _35 = address(this).balance * 35 / 100;
        uint _20 = address(this).balance * 20 / 100;
       
        require(payable(developers["SBCLLC"]).send(_20));
        require(payable(developers["SAM"]).send(_35));
        require(payable(developers["ALLISON"]).send(_40));
       
    }
   
    //only owner
    function setCost(uint256 _newCost) public onlyOwner { cost = _newCost; }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner { maxMintAmount = _newmaxMintAmount; }

    function setBaseURI(string memory _newBaseURI) public onlyOwner { baseURI = _newBaseURI; }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner { baseExtension = _newBaseExtension; }

    function pause(bool _state) public onlyOwner { paused = _state; }
 
    function whitelistUser(address _user) public onlyOwner { require(whitelistCount < 2, "Whitelisted limit reached"); whitelisted[_user] = true; whitelistCount++; }
 
    function removeWhitelistUser(address _user) public onlyOwner { delete whitelisted[_user]; whitelistCount--;}
   
    function addDeveloperAddress(string memory name, address _address) public onlyOwner { developers[name] = payable(_address); }

}