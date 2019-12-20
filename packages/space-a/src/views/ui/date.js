import React, { Component } from "react";

class DateFormater extends Component {
  state = {
    str: "--"
  };

  componentDidMount() {
    this.handleDate();
  }

  componentDidUpdate(preState) {
    if (preState.date !== this.props.date) {
      this.handleDate();
    }
  }

  handleDate = () => {
    const { value, type = "all" } = this.props;

    if (!value) {
      this.setState({ str: "--" });
      return;
    }

    const date = new Date(value * 1000);
    let y, m, d, hh, mm, ss;

    if (type === "all" || type === "date") {
      y = date.getFullYear();
      m = this.handleZero(date.getMonth() + 1);
      d = this.handleZero(date.getDate());
    }

    if (type === "all" || type === "time") {
      hh = date.getHours();
      mm = this.handleZero(date.getMinutes());
      ss = this.handleZero(date.getSeconds());
    }

    if (type === "all") {
      return this.setState({ str: `${y}-${m}-${d} ${hh}:${mm}:${ss}` });
    }
    if (type === "date") {
      return this.setState({ str: `${y}-${m}-${d}` });
    }
    if (type === "time") {
      return this.setState({ str: `${hh}:${mm}:${ss}` });
    }
  };

  handleZero = value => {
    if (!value) {
      return;
    }

    if (+value < 10) {
      return "0" + value;
    }

    return value;
  };

  render() {
    const { str } = this.state;

    return <psan>{str}</psan>;
  }
}

export default DateFormater;
