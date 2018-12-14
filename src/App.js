import React, { Component } from "react";
import "./App.css";
import ExChart from "./components/ExChart";
import { Row, Col } from "antd";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <ExChart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
