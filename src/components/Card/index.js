import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  static propTypes = {
    age: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  };
  render() {
    const { age, firstName, lastName } = this.props;
    return (
      <div className="card-container">
        <p>Age: {age}</p>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
      </div>
    );
  }
}

Card.defaultProps = {
  age: 10,
  firstName: "first name",
  lastName: "last name",
};

export default Card;
