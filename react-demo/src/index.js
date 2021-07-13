import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";
import { Provider } from "./redux/provider";
import store from "./store";
class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

ReactDOM.render(
  <Provider state={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
