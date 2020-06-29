import React, { Component } from "react";

class Two extends Component {
  state = {
    stateText: "react",
  };

  handleChangeStateText = () => {
    /* setTimeout(() => {
      this.setState({ stateText: "vue" });
      console.log(this.state.stateText);
    }, 0); */

    /* this.setState({ stateText: "vue" }, () => {
      console.log(this.state.stateText);
    }); */

    this.setState({ stateText: "vue" });
    this.setState({ stateText: "wmp" });
  };

  render() {
    const { stateText } = this.state;

    return <div onClick={this.handleChangeStateText}>{stateText}</div>;
  }
}

export default Two;
