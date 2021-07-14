import React from "react";
import { connect } from "dva";
import List from "../components/list";
function IndexPage(props) {
  return <List />;
}

IndexPage.propTypes = {};

export default connect((list) => list)(IndexPage);
