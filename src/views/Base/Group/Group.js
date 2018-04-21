import React, {Component} from 'react';
import  { Redirect,Link } from 'react-router-dom';
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

import GInfo from './GInfo.js';
import GPhyInfo from './GPhyInfo';
import GExercise from './GExercise';
import GActivities from './GActivities';


class Group extends Component {

  constructor(props){
    super(props);
    this.state = {
     data1: [],
     data2:[],
     data3: [],
     data4: []
   };
   }

  // getInfo(){
  //   fetch('http://localhost:3000/api/getInfo', {
  //      method: 'post',
  //      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //      body: querystring.stringify({
  //     'username': sessionStorage.getItem("username")
  //   })
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //       console.log(sessionStorage.getItem("username"));
  //     sessionStorage.setItem("polar-id", response );
  //   })
  //   .catch(e => e);
  // }

    componentDidMount(){
      Promise.all([
          fetch('http://localhost:3000/group/activity/average'),
          fetch('http://localhost:3000/group/activity/gender'),
          fetch('http://localhost:3000/group/activity/list'),
          fetch('http://localhost:3000/group/activity/stats')
      ])
      .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
      .then(([data1, data2, data3, data4]) => {
          // store data in State
          this.setState({'data1': [data1]});
          this.setState({'data2': [data2]});
          this.setState({'data3': [data3]});
          this.setState({'data4': [data4]});
      });
  }

  render() {
    var temp = sessionStorage.getItem("username");
    if (temp === null){
      return (<Redirect to='/'/>);
  }
  else {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            {this.state.data1.map((post, index) => {
                     return <GInfo key={index} data={post} />
                  })}
          </Col>

          <Col xs="12" lg="6">
            {this.state.data2.map((post, index) => {
                     return <GActivities key={index} data={post} />
                  })}
          </Col>
        </Row>
        <Row>
           <Col xs="12" lg="6">
             {this.state.data3.map((post, index) => {
                      return <GPhyInfo key={index} data={post} />
                   })}
          </Col>

           <Col xs="12" lg="6">
             {this.state.data4.map((post, index) => {
                      return <GExercise key={index} data={post} />
                   })}
          </Col>
        </Row>
      </div>
    )
  }
}
}

export default Group;
