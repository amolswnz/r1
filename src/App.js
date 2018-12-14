import React, { Component } from "react";
import "./App.css";
import ExChart from "./components/ExChart";
import { Row, Col } from "antd";
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class App extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    return (
      <div>
        <Row  type="flex" >
          <Col span={12}>
            <ExChart />
          </Col>
          <Col span={12}>
            <RangePicker onChange={this.onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
