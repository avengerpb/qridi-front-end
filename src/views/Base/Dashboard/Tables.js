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
import PPhyInfo from './PPhyInfo';
import PExercise from './PExercise';
import PActivities from './PActivities';


class Tables extends Component {

  constructor(props){
    super(props);
    this.state = {
     data1: [],
     data2: [],
     data3: []
   };
   }

  getInfo(){
    var name = sessionStorage.getItem("username");
    var id = sessionStorage.getItem("username");
    if ((name!== null) && (id!==null)){
    fetch('http://localhost:3000/api/getInfo', {
       method: 'post',
       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       body: querystring.stringify({
      'username': sessionStorage.getItem("username")
    })
    })
    .then(response => response.json())
    .then(response => {
      console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("polar-id"));
      sessionStorage.setItem("polar-id", response );
    })
    .catch(e => e);
    fetch('http://localhost:3000/api/getExercise');
    fetch('http://localhost:3000/api/getActivity');
    fetch('http://localhost:3000/api/getPhysical');
  }
  else {
    console.log('Need Login')
  }

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
          // store data in State
          this.setState({'data1': [data1]});
          var act = data2.concat(data3);
          this.setState({'data2': [act]});
          var exe = data4.concat(data5);
          this.setState({'data3': [exe]});
      });
    }
    else {
      console.log('Error get Info')
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Button color="primary" className="px-4 qr-btn" onClick={this.getInfo()}>Update User Info</Button>
        <Row>
          <Col xs="12" lg="6">
            {this.state.data1.map((post, index) => {
                     return <PInfo key={index} data={post} />
                  })}
          </Col>

          <Col xs="12" lg="6">
            {this.state.data2.map((post, index) => {
                     return <PActivities key={index} data={post} />
                  })}
          </Col>

        </Row>

        <Row>

           <Col xs="12" lg="6">
             {this.state.data3.map((post, index) => {
                      return <PExercise key={index} data={post} />
                   })}
          </Col>

          <Col xs="12" lg="6">
            {this.state.data1.map((post, index) => {
                     return <PPhyInfo key={index} data={post} />
                  })}
          </Col>
        </Row>
      </div>

    )
  }
}

export default Tables;
