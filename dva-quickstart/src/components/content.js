import React from "react";
import { connect } from "dva";

const Content = (props) => {
  const { content, id } = props.value;
  return (
    <li>
      {content}
      <button
        onClick={() => {
          props.dispatch({ type: "list/delete", payload: id });
        }}
      >
        delete
      </button>
    </li>
  );
};

export default connect((list) => list)(Content);
