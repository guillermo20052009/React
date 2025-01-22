import { Component } from "react";

export default class HelloComponent extends Component {
  render() {
    return <h1>Hello Jose{this.props.nombre}</h1>;
  }
}