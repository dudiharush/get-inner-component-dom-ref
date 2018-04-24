import React from "react";
import { render } from "react-dom";
import InnerComponent from "./inner-component";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.divRef = {};
  }
  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <div style={styles}>
        <InnerComponent
          height={"" + this.divRef.clientHeight}
          divRef={el => (this.divRef = el)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
