import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';

class PInfo extends Component {
  constructor(props){
    super(props);
   }

     componentDidMount(){
       console.log(this.props);
     }

  render() {
    return (
      <Card>
      <CardHeader>
        <i className="fa icon-user"></i> Personal Information
      </CardHeader>
      <CardBody>
        <Table responsive>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{this.props['first-name']}</td>
            </tr>
            <tr>
              <td>Polar ID</td>
              <td> </td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{this.props.birthdate}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td> </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td> </td>
            </tr>
            <tr>
              <td>Heart rate</td>
              <td> </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
    )
  }
}

export default PInfo;
