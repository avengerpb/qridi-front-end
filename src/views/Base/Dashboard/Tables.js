import React, {Component} from 'react';
var querystring = require('querystring');
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from 'reactstrap';

import PInfo from './Pinfo.js';

class Tables extends Component {

  constructor(props){
    super(props);
    this.state = {
     data1: ''
   };
   }

  getInfo(){
    fetch('http://localhost:3000/api/getInfo', {
       method: 'post',
       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       body: querystring.stringify({
      'username': sessionStorage.getItem("username")
    })
    })
    .then(response => response.json())
    .then(response => {
      // console.log(response);
      sessionStorage.setItem("polar-id", response );
    })
    .catch(e => e);
  }

    componentDidMount(){
      var id = sessionStorage.getItem("polar-id");
      if (id !== null) {
      Promise.all([
          fetch('http://localhost:3000/profile/'+ id),
          fetch('http://localhost:3000/data/activity/'+id+'/average'),
          fetch('http://localhost:3000/data/activity/'+id+'/max'),
          fetch('http://localhost:3000/data/exercise/'+id+'/common'),
          fetch('http://localhost:3000/data/exercise/'+id+'/sport')
      ])
      .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()]))
      .then(([data1, data2, data3, data4, data5]) => {
          // console.log(data1);
          this.setState({'data1': data1});
          console.log(data2);
          console.log(data3);
          console.log(data4);
          console.log(data5);
      });
    }
    else {
      console.log('Error get Info')
    }
  }

  render() {
    const pi = this.state.data1.map((post, index) => {
              return <PInfo post={index} />
          });

    // console.log(this.state.data1);
    return (
      <div className="animated fadeIn">
        <Button color="primary" className="px-4 qr-btn" onClick={this.getInfo}>Update User Info</Button>
        <Row>
          <Col xs="12" lg="6">
              {pi}
          </Col>

          <Col xs="12" lg="6">
          </Col>

        </Row>

        <Row>

           <Col xs="12" lg="6">
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Exercise
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td>ID </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Transaction-id </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Device</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Start-time</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>calories</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Distance</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>heart-rate</td>
                    <td></td>
                  </tr>
                 <tr>
                    <td>Anaerobic-threshold</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vo2-max</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Weight-source</td>
                    <td></td>
                  </tr>
                  </tbody>
                </Table>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Tables;
