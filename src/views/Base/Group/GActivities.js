import React, {Component} from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';


class PActivities extends Component {

  constructor(props){
    super(props);
   }

  render() {
          return (
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Gender
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td> </td>
                    <td>Male</td>
                    <td>Female</td>
                  </tr>
                  <tr>
                    <td>Weigh</td>
                    <td>{this.props.data[1]['weight']}</td>
                    <td>{this.props.data[1]['height']}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{this.props.data[2]['weight']}</td>
                    <td>{this.props.data[2]['height']}</td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td></td>
                    <td></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

    )
  }
}

export default PActivities;
