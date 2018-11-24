import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import firebase from "firebase";
import { Redirect } from 'react-router-dom';
import App from '../../../App';
import Constants from "../../../Constants";

const googleProvider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Welcome.\nNucleus Dashboard is currently in active development. Please click on the Contribute button to report bugs/issues.',
      loggedIn: false,
    }
  }

  async componentWillMount() {
    if (await App.isLoggedIn() == 'yes') {
      this.setState({loggedIn: true});
    }
  }

  _onClickLogin = async () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(async res => {
        const token = res.credential.accessToken;
        const user = res.user;
        if (Constants.allowedEmails.indexOf(user.email) == -1) {
          this.setState({text: "You're not allowed to use this platform. Contact student.transport@snu.edu.in for access."});
          return;
        }
        await window.localStorage.setItem("loggedIn", "yes");
        await window.localStorage.setItem("userObject", JSON.stringify(user));
        await window.localStorage.setItem("loginToken", JSON.stringify(token));
        this.setState({loggedIn: true});
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.loggedIn == true) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Transport portal</h1>
                      <p className="text-muted">{this.state.text}</p>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={this._onClickLogin}
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: 44 + "%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Nucleus</h2>
                      <p>
                        Dashboard is an open-source project, which means it's
                        free for use and improvement from people all over the
                        world.
                      </p>
                      <Button color="white" className="mt-3" active>
                        <a href="https://github.com/kanishk98/nucleus-dashboard">
                          Contribute now!
                        </a>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
