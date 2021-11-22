import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

function Navbar(props){
    let acc = "";
    if(props.account){
        const len = props.account.length;
        acc = props.account.substring(0, 5) + "..." + props.account.substring(len - 4, len);
    }
    return(
        <div class="w3-top w3-row">
            <div class="w3-bar navbar w3-mobile w3-white">
                <img src={logo} class="logo w3-left"/>
                <a class="w3-bar-item w3-button w3-padding-32 w3-hover-white" href="">Home</a>
                <a class="w3-bar-item w3-button w3-padding-32 w3-hover-white" href="">About</a>
                <div class="w3-dropdown-hover w3-hover-white">
                    <button class="w3-button w3-hover-white w3-padding-32">Artist Collections</button>
                    <div class="w3-dropdown-content w3-bar-block w3-card-4">
                    <a href="" class="w3-bar-item w3-button w3-hover-white">Link 1</a>
                    <a href="" class="w3-bar-item w3-button w3-hover-white">Link 2</a>
                    <a href="" class="w3-bar-item w3-button w3-hover-white">Link 3</a>
                    </div>
                </div>
                <a class="w3-bar-item w3-button w3-padding-32 w3-hover-white" href="">Contact</a>
                <div class="w3-bar-item w3-padding-32 w3-right">{acc} | {props.network}</div>
            </div>
        </div>
    );
}

export default Navbar;