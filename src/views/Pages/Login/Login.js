import React, {Component} from 'react';
import  { Redirect,Link } from 'react-router-dom';
import { Form, Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
var querystring = require('querystring');


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
     username: '',
     password: '',
     user: null,
     logged: false
   };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   }

  handleChange(event) {this.setState({ [event.target.name]: event.target.value })};

  checkdata(data) {
      if(data === "No user" )
      {
        this.setState({'logged': false});
      }
      else if (data === "Wrong password") {
        this.setState({'logged': false});
      }
      else {
        console.log(data);
        this.setState({'logged': true});
        const user = sessionStorage.setItem("username", data['username'] );
      }
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:3000/users/login', {
      method: 'post',
   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   body: querystring.stringify({
  'email_uname': this.refs.username.props.value,
  'password': this.refs.password.props.value
})
})
.then(response => response.json())
.then(response => {
  // console.log(response);
  this.checkdata(response)
})
.catch(e => e);
}
  render() {
    var temp = sessionStorage.getItem("username");
    if (this.state.logged || (temp !== null)){
      return (<Redirect to='/profile'/>);
  }
  else {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup className="shadow-6dp">
                <Card className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                  <CardBody>
                    <img className="login-logo" src="img/logo.png" alt="qridi logo"/>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input ref="username" name="username" type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input ref="password" name="password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    </InputGroup>
                    <Row>
                      <Col xs="12">
                        <Button color="primary" className="px-4 qr-btn" type="Submit" disabled={!this.state.username || !this.state.password} >Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0"><Link to="/register">Register Now!</Link></Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
                </Card>
                </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
    }
  }
}

export default Login;
