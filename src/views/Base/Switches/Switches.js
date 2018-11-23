import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import CustomSwitch from './CustomSwitch';

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

  componentWillMount() {
    // prepare data for Switch
    const cb = require('../../../assets/common_buses');
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
