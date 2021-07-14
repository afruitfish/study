import React from "react";
import Content from "./content";
import { connect } from "dva";
const List = (props) => {
  const { list } = props;
  return (
    <div>
      {list.map((context) => (
        <Content value={context} key={context.id} />
      ))}
    </div>
  );
};

List.propTypes = {};

export default connect((list) => list)(List);
