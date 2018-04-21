import React, {Component} from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';



class PPhyInfo extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
   }

  render() {
    return (
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i>  Physical-information
              </CardHeader>
              <CardBody>
                 <Table responsive>
                  <tbody>
                  <tr>
                    <td>User ID </td>
                    <td>{this.props.data[0]['_id']}</td>
                  </tr>
                  <tr>
                    <td>Avg Calories </td>
                    <td>{this.props.data[0]['calories']}</td>
                  </tr>
                  <tr>
                    <td>Active Calories</td>
                    <td>{this.props.data[0]['active-calories']}</td>
                  </tr>
                  <tr>
                    <td>Number of Exercise</td>
                    <td>{this.props.data[0]['count']}</td>
                  </tr>
                  <tr>
                    <td>User ID </td>
                    <td>{this.props.data[1]['_id']}</td>
                  </tr>
                  <tr>
                    <td>Avg Calories </td>
                    <td>{this.props.data[1]['calories']}</td>
                  </tr>
                  <tr>
                    <td>Active Calories</td>
                    <td>{this.props.data[1]['active-calories']}</td>
                  </tr>
                  <tr>
                    <td>Number of Exercise</td>
                    <td>{this.props.data[1]['count']}</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

    )
  }
}

export default PPhyInfo;
