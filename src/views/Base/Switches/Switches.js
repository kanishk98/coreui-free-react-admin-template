import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import CustomSwitch from './CustomSwitch';
import Constants from '../../../Constants';
import ProgressBar from '../ProgressBar/ProgressBar';

/*
All toggles for commonly switched options
*/

class Switches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busArray: []
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
      let cb = await fetch(Constants.collectionsIp + '/get-common-buses');
      cb = await cb.json();
      console.log(cb);
      let busArray = [];
      cb.map(bus => {
        let temp = {};
        temp.key = bus.key;
        temp.title = bus.from + " to " + bus.to;
        temp.info = bus.time + "\t" + bus.seats;
        temp.checked = bus.checked;
        busArray.push(temp);
      });
      this.setState({ busArray: busArray });
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.busArray || this.state.busArray.length == 0) {
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
                  </Table>
                </CardBody>
              </Card>
              <ProgressBar />
            </Col>
          </Row>
        </div>
      );
    }
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
                  <>
                    <CustomSwitch switches={this.state.busArray} />
                  </>
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
