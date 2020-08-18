import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  render() {
    const { children, onClick } = this.props;
    return (
      <button {...this.props} onClick={() => onClick()}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  children: "click here",
  onClick: (f) => f,
};

export default Button;
