import React, {Component} from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';


class PActivities extends Component {

  render() {
          return (
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Activity
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td>ID </td>
                    <td>{this.props.data[0]['_id']}</td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td>{this.props.data[0]['calories']}</td>
                  </tr>
                  <tr>
                    <td>Active-calories</td>
                    <td>{this.props.data[0]['active-calories']}</td>
                  </tr>
                  <tr>
                    <td>Max calories</td>
                    <td>{this.props.data[1]['max-calories']}</td>
                  </tr>
                  <tr>
                    <td>max-steps</td>
                    <td>{this.props.data[1]['max-step']}</td>
                  </tr>
                  <tr>
                    <td>avg-steps</td>
                    <td>{this.props.data[0]['steps']}</td>
                  </tr>
                  <tr>
                    <td>active-max</td>
                    <td>{this.props.data[1]['active-max']}</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

    )
  }
}

export default PActivities;
