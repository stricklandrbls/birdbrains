import Web3 from "web3";

function CollectionHeader(){

    const _mint = async () =>{
        // props.info.contract.methods.mint().call()
        // .then(res => {
        //     do something;
        // })
        // .catch(err =>{
        //     hangle error;
        // })
        alert("Minting!");
    }

    return(
        <div class="w3-container w3-padding-large">
            <div class="w3-center">
                <br></br>
                <h2>Collections Page</h2>
                <button class="w3-button w3-round" onClick={_mint}>Mint</button>
            </div>
        </div>
    )
}

export default CollectionHeader;