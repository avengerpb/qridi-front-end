import React, {Component} from 'react';
import  { Redirect,Link } from 'react-router-dom';
import {Form, Container, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
var querystring = require('querystring');

class Register extends Component {

  constructor(props){
    super(props);
  this.state = {
     username: '',
     email: '',
     password: '',
     cpassword: ''
   };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   }

   // checkdata(data) {
   //     if(data === 0 )
   //     {
   //       sessionStorage.setItem(this.refs.username.props.value, data['username'] );
   //     }
   //     else {
   //       console.log("false");
   //     }
   // }

   handleChange(event) { this.setState({ [event.target.name]: event.target.value })};

   handleSubmit(event){
     // console.log(this.refs.username.props.value);
     event.preventDefault();
     fetch('http://localhost:3000/users/register', {
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: querystring.stringify({
     'username': this.refs.username.props.value,
     'cpassword': this.refs.cpassword.props.value,
     'email': this.refs.email.props.value,
     'password': this.refs.password.props.value
   })
   })
   .then(response => response.json())
   .then(response => {
     if(response === 0 )
     {
       sessionStorage.setItem("username", this.refs.username.props.value );
      var temp = sessionStorage.getItem("username");
       console.log(temp);
     }
     else {
       console.log(response);
     }
   })
   .catch(e => e);}

  render() {
    // Get user id in the session which is store in from login (Test for now)
    var temp = sessionStorage.getItem("username");
    console.log(temp);
    if (temp === null) {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <img className="reg-logo" src="img/logo.png" alt="qridi logo"/>
                  <h3 className="text-center">Register as New User</h3>
                  <Form onSubmit={this.handleSubmit}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input ref="username" name="username" type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input ref="email" name="email" type="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input ref="cpassword" name="cpassword" type="password" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.cpassword}/>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input ref="password" name="password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                  </InputGroup>
                  <Button color="primary" block type="Submit" >Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  else {
    return (<Redirect to='/profile'/>);
  }
  }
}

export default Register;
