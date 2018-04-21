import React, {Component} from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';



class GInfo extends Component {

  constructor(props){
    super(props);
   }

  render() {
    return (
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Group Details
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Active Calories</td>
                      <td>{this.props.data[0]['active-calories']}</td>
                    </tr>
                    <tr>
                      <td>Calories </td>
                      <td>{this.props.data[0]['calories']}</td>
                    </tr>
                    <tr>
                      <td>Max Calories</td>
                      <td>{this.props.data[0]['max-calories']}</td>
                    </tr>

                    <tr>
                      <td>Active Max</td>
                      <td>{this.props.data[0]['active-max']}</td>
                    </tr>
                    <tr>
                      <td>Max Steps</td>
                      <td>{this.props.data[0]['max-step']}</td>
                    </tr>
                    <tr>
                      <td>Min-calories</td>
                      <td>{this.props.data[0]['min-calories']}</td>
                    </tr>
                    <tr>
                      <td>Active Min</td>
                      <td>{this.props.data[0]['active-min']}</td>
                    </tr>
                    <tr>
                      <td>Min Steps</td>
                      <td>{this.props.data[0]['min-step']}</td>
                    </tr>

                  </tbody>
                </Table>
              </CardBody>
            </Card>
    )
  }
}

export default GInfo;
