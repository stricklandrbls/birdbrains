
function ConnectButton(props){
    if(props.status == false){
        return(
            <button class="w3-button w3-display-topright w3-round w3-margin w3-red w3-disabled w3-mobile">Cannot Connect</button>
        )
    }
    else{
        if(props.text != null)
        {
            const text_len = props.text.length;
            const text = props.text.substring(0, 5) + "..." + props.text.substring(text_len - 4, text_len);
            let network = null;
            switch(props.network){
                case "80001":
                    network = "Mumbai";
                    break;
                case "137":
                    network = "Poly";
                    break;
                default:
                    network = props.network;
            }


            return(
                // <button class="w3-button w3-hover-green w3-display-topright w3-round w3-margin w3-border w3-border-black w3-green">{text}</button>
                // <div class="w3-right w3-margin-right w3-mobile">
                <button class="w3-padding w3-display-right w3-margin-right w3-round w3-border w3-border-black w3-green w3-hover-green w3-mobile" >{text}</button>
                    // <p class="w3-margin-bottom w3-mobile">{network}</p>
                // </div>
            )
        }
        return(
            // <div class="w3-cell w3-margin-right w3-mobile">
                <button class="w3-display-right w3-margin-right w3-padding" onClick={props.onClick}>Connect</button>
            // </div>
        )
    }
}

export default ConnectButton;