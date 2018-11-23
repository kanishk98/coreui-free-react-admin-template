import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';

class ProgressBar extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <Progress animated value={100} className="mb-3" />
            {/*<Progress animated color="success" value="25" className="mb-3" />
            <Progress animated color="info" value={50} className="mb-3" />
            <Progress animated color="warning" value={75} className="mb-3" />
    <Progress animated color="danger" value="100" className="mb-3" />*/}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProgressBar;