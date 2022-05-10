import React from "react";

class Footer extends React.Component {
  render() {
    return(
        <footer
            className={`d-flex justify-content-center mt-auto ${this.props.color}`}
        >
            Auto nuevo, corazón contento.
        </footer>
    );
  }
}

export default Footer;