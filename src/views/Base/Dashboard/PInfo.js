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
              <td>{this.props.data['first-name']}</td>
            </tr>
            <tr>
              <td>Polar ID</td>
              <td>{this.props.data['polar-user-id']}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{this.props.data['birthdate']}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.props.data['gender']}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{this.props.data['weight']}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{this.props.data['height']}</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
    )
  }
}

export default PInfo;
