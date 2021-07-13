import React, { Component } from "react";
import context from "../context";

export const connect =
  (mapStateToProps, mapDispatchProps) => (WrappedComponent) => {
    class Connect extends Component {
      static contextType = context;
      constructor() {
        super();
        this.state = { allProps: {} };
      }
      componentWillMount() {
        const store = this.context;
        this._updateProps();
        store.subscribe(() => this._updateProps());
      }
      _updateProps() {
        console.log(this.context, "====");
        // console.log(mapStateToProps, mapDispatchProps, "---");
        const store = this.context;
        let stateProps = mapStateToProps
          ? mapStateToProps(store.getState())
          : {}; // 额外传入 props，让获取数据更加灵活方便
        let dispatchProps = mapDispatchProps
          ? mapDispatchProps(store.dispatch)
          : {}; // 额外传入 props，让获取数据更加灵活方便
        this.setState({
          allProps: {
            // 整合普通的 props 和从 state 生成的 props
            ...stateProps,
            ...dispatchProps,
            ...this.props,
          },
        });
      }
      render() {
        return <WrappedComponent {...this.state.allProps} />;
      }
    }
    return Connect;
  };
