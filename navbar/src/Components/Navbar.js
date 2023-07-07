import "./Navbar.css";
import {Component} from "react";
import logo from "../Assets/logo.avif"
class Navbar extends Component{

    state = {Clicked:false};

    handleClick=()=>{
            this.setState({Clicked: !this.state.Clicked});
    }
    render(){
        return (
            <div>
                <nav className="nav">
                    <img className="logo" src={logo} alt="This is a logo" />
                    <div>
                        <ul id="navbar" className={this.state.Clicked? "#navbar active" : "#navbar"}>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html">Shop Leatest</a></li>
                            <li><a href="index.html">Category</a></li>
                            <li><a href="index.html">Gift Card</a></li>
                            <li><a href="index.html">About Us</a></li>
                        </ul>
                        
                    <div className="Brandname">
                        <p>Seria Style</p>
                    </div>

                    </div>
                    <div id="navbarIcon">
                        <li>
                            <a href="index.html"><i id="profile" className="far fa-user-circle"></i></a>
                        </li>
                        <li>
                            <a href="index.html"><i id="cart" className="fa regular fa-cart-shopping"></i></a>
                        </li>

                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.Clicked ? "fas fa-times":"fas fa-bars"}></i>
                    </div>

                </nav>
            </div>
        );    
    }
}
export default Navbar;