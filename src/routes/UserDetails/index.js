import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetails } from "../../actions/user";
import Card from "../../components/Card";

class UserDetails extends Component {
  state = { usersDetails: [], filteredDetails: [] };

  async componentDidMount() {
    const { user } = await this.props;
    if (user !== null) {
      const { token } = await user;
      await this.props.getUserDetails(token);
      const { details } = await this.props.user;
      await this.setState({
        usersDetails: details,
        filteredDetails: details,
      });
    } else {
      await this.props.history.push("/");
    }
  }

  async handleChange(type) {
    let result = [];
    const { usersDetails } = await this.state;
    switch (type) {
      case "all":
        const { details } = await this.props.user;
        await this.setState({
          filteredDetails: details,
        });
        break;
      case "20":
        result = usersDetails.filter((details) => {
          return details.age >= 20;
        });
        await this.setState({
          filteredDetails: result,
        });
        break;
      case "30":
        result = usersDetails.filter((details) => {
          return details.age < 30;
        });
        await this.setState({
          filteredDetails: result,
        });
        break;
      case "10":
        result = usersDetails.filter((details) => {
          return (details.firstName + details.lastName).length >= 10;
        });
        await this.setState({
          filteredDetails: result,
        });
        break;
      default:
    }
  }

  render() {
    const { filteredDetails } = this.state;
    return (
      <div
        style={{
          width: "60vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10vh",
        }}
      >
        <label>Filter by:</label>
        <select onChange={(e) => this.handleChange(e.target.value)}>
          <option value="all">All</option>
          <option value="20">{"Age>=20"}</option>
          <option value="30">{"Age<30"}</option>
          <option value="10">{"full name>=10"}</option>
        </select>
        {filteredDetails.map((details, index) => {
          return (
            <Card
              key={index}
              age={details.age}
              firstName={details.firstName}
              lastName={details.lastName}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  {
    getUserDetails,
  }
)(UserDetails);
