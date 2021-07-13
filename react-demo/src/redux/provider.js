import { Component } from "react";
import context1 from "../context";
export class Provider extends Component {
  render() {
    return (
      <context1.Provider value={this.props.state}>
        {this.props.children}
      </context1.Provider>
    );
  }
}
