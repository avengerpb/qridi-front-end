import React, {Component} from 'react';
import  { Redirect,Link } from 'react-router-dom';
import { Form, Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';


class Polar extends Component {
  auth(){
    window.open("http://localhost:5000");
    fetch('http://localhost:3000/api/get_token')
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(e => e);
  }

  render() {
    var temp = sessionStorage.getItem("username");
    console.log(temp);
    if (temp === null){
        return (<Redirect to='/'/>);
    }
    else {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup className="shadow-6dp">
                <Card className="p-4">
                  <CardBody>
                    <img className="login-logo" src="img/logo.png" alt="qridi logo"/>
                    <Row>
                      <Col xs="12">
                        <Button color="primary" className="px-4 qr-btn" onClick={this.auth}>Authentication</Button>
                      </Col>
                    </Row>
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
}

export default Polar;
