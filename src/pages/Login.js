import React from "react";
import { Image } from "react-bootstrap";
import "../assets/login.css"

class Login extends React.Component {
  render() {
    return(
      <div className="login-page">
        <div className="row login-row">
          <div className="col-12 col-md-6">
            Column
          </div>
          <div className="col-6 d-none d-md-block">
            <Image src="./img/desktop-login.png" className="img-fluid img-login"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;