import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import CustomSwitch from './CustomSwitch';
import Constants from '../../../Constants';
import ProgressBar from '../ProgressBar/ProgressBar';
import { renderIf } from '../../Dashboard/renderIf';

/*
All toggles for commonly switched options
*/

class Switches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commonBusArray: []
    }
  }

  isChecked = (option) => {
    const ls = window.localStorage;
    const old = ls.getItem(option);
    console.log(option + ' ' + old);
    if (old == 'false') {
      return false;
    } else {
      return true;
    }
  }

  async componentDidMount() {
    // fetch common buses from server
    try {
      let cb = await fetch('http://' + Constants.collectionsIp + '/get-common-buses');
      cb = await cb.json();
      console.log(cb);
      let commonBusArray = [];
      cb.map(bus => {
        let temp = {};
        temp.key = bus.key;
        temp.title = bus.from + " to " + bus.to;
        temp.info = bus.time + "\t" + bus.seats;
        temp.checked = bus.checked;
        commonBusArray.push(temp);
      });
      this.setState({ commonBusArray: commonBusArray });

      let ab = await fetch('http://' + Constants.collectionsIp + '/get-buses');
      ab = await ab.json();
      console.log(ab);
      let allBusArray = [];
      ab.map(bus => {
        let temp = {};
        temp.key = bus.key;
        temp.title = bus.from + " to " + bus.to;
        temp.info = bus.time + "\t" + bus.seats;
        allBusArray.push(temp);
      });
      this.setState({ allBusArray: allBusArray });
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                Common buses taken
              </CardHeader>
              <CardBody className="p-0">
                <Table hover striped className="table-align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Bus</th>
                      <th>Switch presence</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  {renderIf(!this.state.commonBusArray || this.state.commonBusArray.length == 0, <div />, <>
                    <CustomSwitch switches={this.state.commonBusArray} />
                  </>)}
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                All buses
              </CardHeader>
              <CardBody className="p-0">
                <Table hover striped className="table-align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Bus</th>
                      <th>Switch presence</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  {renderIf(!this.state.allBusArray || this.state.allBusArray.length == 0, <div />, <>
                    <CustomSwitch switches={this.state.allBusArray} />
                  </>)}
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Switches;
