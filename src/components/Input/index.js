import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
  };

  async handleChange(e) {
    const text = e.target.value;
    this.props.onChange(text);
  }

  render() {
    const { label, placeholder, type } = this.props;
    return (
      <div>
        <label>
          <b>{label}</b>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          required
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  label: "Username",
  placeholder: "Enter username",
  onChange: (f) => f,
  type: "text",
};

export default Input;
