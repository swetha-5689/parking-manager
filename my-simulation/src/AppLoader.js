import React, { Component } from "react";
import { CubeGrid } from "styled-loaders-react";

class AppLoader extends Component {
  state = {
    loading: true
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  };
  render() {
    return;
  }
}
export default AppLoader;
