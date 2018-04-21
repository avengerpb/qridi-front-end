import React, {Component} from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';



class PPhyInfo extends Component {
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
                    <td>ID </td>
                    <td>{this.props.data['polar-user-id']}</td>
                  </tr>
                  <tr>
                    <td>Transaction-id </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{this.props.data['weight']}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{this.props.data['weight']}</td>
                  </tr>
                  <tr>
                    <td>Maximum-heart-rate</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Resting-heart-rate</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Aerobic-threshold</td>
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

    )
  }
}

export default PPhyInfo;
