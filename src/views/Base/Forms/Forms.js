import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import Constants from '../../../Constants';
import { Redirect } from 'react-router-dom';

class Forms extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      buttonText: 'Submit bus',
      redirect: false,
    };
  }

  _onChangeFrom = ({ target }) => {
    this.setState({ from: target.value });
  }

  _onChangeTo = ({ target }) => {
    this.setState({ to: target.value });
  }

  _onChangePrice = ({ target }) => {
    this.setState({ price: target.value });
  }

  _onChangeMonth = ({ target }) => {
    this.setState({ month: target.value });
  }

  _onChangeDay = ({ target }) => {
    this.setState({ day: target.value });
  }

  _onChangeHour = ({ target }) => {
    this.setState({ hour: target.value });
  }

  _onChangeMinute = ({ target }) => {
    this.setState({ minute: target.value });
  }

  _onChangeAMPM = ({ target }) => {
    this.setState({ amPm: target.value });
  }

  _onChangeSeats = ({ target }) => {
    this.setState({ seats: target.value });
  }

  _onClickSubmit = async () => {
    // verification will be done by the server
    // no need to do same on front-end
    const { from, to, price, month, day, hour, minutes, amPm, seats } = this.state;
    let newBus = {};
    newBus.from = from;
    newBus.to = to;
    newBus.info = hour + ':' + minutes + ' ' + amPm + ' on ' + day + ' ' + month;
    newBus.seats = seats;
    newBus.price = price;
    const url = 'http://' + Constants.collectionsIp + '/add-bus';
    console.log(url);
    debugger
    const data = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBus),
    });
    debugger
    console.log(data);
      /*.then(res => {
        console.log(res);
        debugger
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
        debugger
        this.setState({ buttonText: 'Failed to add bus. Please try again.' })
      })*/
  }

  render() {
    console.log(this.state);
    if (this.state.redirect == true) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>New bus
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <FormGroup>
                        <Label htmlFor="prependedInput">Trip endpoints</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>From</InputGroupText>
                            </InputGroupAddon>
                            <Input id="prependedInput" size="16" type="text" onBlur={this._onChangeFrom} />
                          </InputGroup>
                          <p className="help-block"></p>
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>To</InputGroupText>
                            </InputGroupAddon>
                            <Input id="prependedInput" size="16" type="text" onBlur={this._onChangeTo} />
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Ticket price</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>Rs. </InputGroupText>
                            </InputGroupAddon>
                            <Input id="appendedPrependedInput" size="16" type="text" onBlur={this._onChangePrice} />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <Col>
                        <FormGroup>
                          <Label htmlFor="ccyear">Day</Label>
                          <Input type="select" name="ccday" id="ccday" value={this.state.date} onChange={this._onChangeDay}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="ccmonth">Month</Label>
                          <Input type="select" name="ccmonth" id="ccmonth" value={this.state.month} onChange={this._onChangeMonth}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="ccmonth">Hour</Label>
                          <Input type="select" name="cchour" id="cchour" value={this.state.hour} onChange={this._onChangeHour}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="ccmonth">Minutes</Label>
                          <Input type="select" name="ccmin" id="ccmin" value={this.state.minute} onChange={this._onChangeMinute}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="ccampm">AM/PM</Label>
                          <Input type="select" name="ccampm" id="ccampm" value={this.state.amPm} onChange={this._onChangeAMPM}>
                            <option value="1">AM</option>
                            <option value="2">PM</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label>Seats</Label>
                          <div className="controls">
                            <InputGroup>
                              <Input id="seats" size="16" type="text" onBlur={this._onChangeSeats} />
                            </InputGroup>
                          </div>
                        </FormGroup>
                      </Col>
                      <div className="form-actions">
                        <Button type="submit" color="primary" onClick={this._onClickSubmit}>{this.state.buttonText}</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
