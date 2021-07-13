/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import context from "./context";
import { connect } from "./redux/connect";

class ThemeSwitch extends Component {
  handleSwitchColor(color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color);
    }
  }
  render() {
    return (
      <>
        <button onClick={this.handleSwitchColor.bind(this, "red")}>red</button>
        <button onClick={this.handleSwitchColor.bind(this, "blue")}>
          blue
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log("=-=-");
  return {
    onSwitchColor: (color) => {
      dispatch({ type: "CHANGE-COLOR", themeColor: color });
    },
  };
};
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;
