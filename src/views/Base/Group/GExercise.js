import React, {Component} from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';


class PExercise extends Component {
  constructor(props){
    super(props);
   }

  render() {
    return (
     <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Exercise
              </CardHeader>
              <CardBody>
                 <Table responsive>
                  <tbody>
                  <tr>
                    <td>Popular Device</td>
                    <td>{this.props.data[0]['_id']['device']}</td>
                  </tr>
                  <tr>
                    <td>Number of Usage</td>
                    <td>{this.props.data[0]['count']}</td>
                  </tr>
                  <tr>
                    <td>Popular Sport</td>
                    <td>{this.props.data[0]['_id']['sport']}</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>{this.props.data[1]['count']}times</td>
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

    )
  }
}

export default PExercise;
