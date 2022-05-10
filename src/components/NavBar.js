import React from "react";
import { Nav, Image } from "react-bootstrap";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        return(
            <Nav
                activeKey="/home"
                className={`justify-content-between ${this.props.color}`}
            >
                <Nav.Item>
                    <Nav.Link href="/">
                        <Image src="./img/logo.png"/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Iniciar sesión</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default NavBar;